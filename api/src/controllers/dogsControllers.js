const { Dog, Temperament } = require("../db");
const { Op } = require("sequelize");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

////////////////////////////////////////////////

const findDogsDb = async () => {
  try {
    const result = await Dog.findAll({
      include: {
        model: Temperament,
        // Solo ver el atributo "name" de la tabla del modelo "Temperament"
        attributes: ["name"],
        // Para ignorar o ver los atributos de la tabla se hace esto:
        through: {
          // Aqui se pasan los atributos, sino se pasa ninguno no se muestra nada
          attributes: [],
        },
      },
    });

    if (result.length > 0)
      return result
        .map((data) => data.dataValues)
        .map((dog) => ({
          ...dog,
          temperaments: dog.temperaments.map((t) => t.name),
          source: "db",
        }));
  } catch (error) {
    console.error(error);
  }
};

////////////////////////////////////////////////

const findDogsApi = async () => {
  // Primera solicitud: Obtener todos los perros
  const apiData = await fetch(`https://api.thedogapi.com/v1/breeds`);
  const apiDogs = await apiData.json();

  // Transformar los datos obtenidos en un modelo específico
  const dogsApi = await Promise.all(
    apiDogs.map(async (apiDog) => {
      // Si tiene un reference_image_id, obtenemos la URL de la imagen
      let imageUrl = null;
      if (apiDog.reference_image_id) {
        try {
          const imageResponse = await fetch(
            `https://api.thecatapi.com/v1/images/${apiDog.reference_image_id}`
          );
          const imageData = await imageResponse.json();
          imageUrl = imageData.url; // Extraemos la URL definitiva
        } catch (error) {
          console.error(`Error fetching image for ${apiDog.name}:`, error);
        }
      }

      // Retornamos el objeto transformado
      return {
        id: apiDog.id,
        name: apiDog.name,
        image: imageUrl || null,
        height: `${apiDog.height.metric} cm`,
        weight: `${apiDog.weight.metric} kg`,
        life_span: apiDog.life_span,
        temperaments: apiDog.temperament?.split(",").map((t) => t.trim()),
        source: "api",
      };
    })
  );

  return dogsApi; // Retornamos la lista completa de perros con imágenes
};

const validateUuid = async (idRaza) => {
  // Verificar si el ID es un UUID válido
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  // Si el ID es UUID valido, entra en el "if" que busca en la base de datos
  if (uuidRegex.test(idRaza)) {
    // Busco el perro en la base de datos interna, incluyendo "Temperament"
    const dbDogs = await Dog.findByPk(idRaza, {
      include: {
        model: Temperament,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });
    return dbDogs;
  }
};

////////////////////////////////////////////////

const dataDogGetIdRaza = async (idRaza) => {
  try {
    // Validador de ID que sean hasta 3 números y que no incluya letras
    const idRazaRegex = /^\d{1,3}$/;
    if (!idRaza || !idRazaRegex.test(idRaza)) {
      throw new Error("ID de raza inválido");
    }

    // Solicitar datos de la raza por ID
    const apiData = await fetch(
      `https://api.thedogapi.com/v1/breeds/${idRaza}`
    );
    const apiDogData = await apiData.json();

    if (!apiDogData.id) {
      throw new Error("Raza no encontrada en la API");
    }

    // Obtener la imagen definitiva si tiene un `reference_image_id`
    let imageUrl = null;
    if (apiDogData.reference_image_id) {
      try {
        const imageResponse = await fetch(
          `https://api.thecatapi.com/v1/images/${apiDogData.reference_image_id}`
        );
        const imageData = await imageResponse.json();
        imageUrl = imageData.url || null;
      } catch (error) {
        console.error(`Error al obtener la imagen para ID ${idRaza}:`, error);
      }
    }

    // Transformar la respuesta en un objeto con el modelo "Dog"
    const dogApi = {
      id: apiDogData.id,
      name: apiDogData.name,
      image: imageUrl,
      height: `${apiDogData.height?.metric} cm`,
      weight: `${apiDogData.weight?.metric} kg`,
      life_span: apiDogData.life_span,
      temperaments: apiDogData.temperament?.split(",").map((t) => t.trim()),
      createdInDb: false, // Verificación de si fue creado en la base de datos
    };

    return dogApi;
  } catch (error) {
    console.error(`Error en dataDogGetIdRaza: ${error.message}`);
    return null; // Devuelve null si ocurre un error
  }
};

////////////////////////////////////////////////

const findNameDogDb = async (name) => {
  // Busco la propiedad "name" en la base de datos:
  const dbDogs = await Dog.findAll({
    where: {
      // Utilizo el operador "iLike" para hacer una busqueda en la propiedad "name"
      // donde el texto buscado sea igual sin importar si esta en mayuscula o minuscula
      name: { [Op.iLike]: `%${name}%` },
    },
    include: {
      model: Temperament,
      attributes: ["name"],
      // Agrego "through" para evitar que me traiga datos adicionales de la tabla
      // through: { attributes: [] },
    },
  });
  if (dbDogs.length > 0)
    return dbDogs.map((dogs) => ({ ...dogs, source: "db" }));
};

////////////////////////////////////////////////

const findNameDogApi = async (name) => {
  try {
    // Solicitar perros que coincidan con el nombre
    const data = await fetch(
      `https://api.thedogapi.com/v1/breeds/search?q=${name}`
    );
    const apiData = await data.json();

    // Crear un objeto para cada perro en la respuesta
    const dogs = await Promise.all(
      apiData.map(async (dog) => {
        let imageUrl = null;

        // Obtener la URL definitiva de la imagen si tiene un reference_image_id
        if (dog.reference_image_id) {
          try {
            const imageResponse = await fetch(
              `https://api.thecatapi.com/v1/images/${dog.reference_image_id}`
            );
            const imageData = await imageResponse.json();
            imageUrl = imageData.url || null;
          } catch (error) {
            console.error(
              `Error al obtener la imagen para reference_image_id ${dog.reference_image_id}:`,
              error
            );
          }
        }

        // Retornar el perro con todos sus datos formateados
        return {
          id: dog.id,
          name: dog.name,
          weight: dog.weight?.metric,
          height: dog.height?.metric,
          life_span: dog.life_span,
          image: imageUrl,
          source: "api",
          temperaments: dog.temperament?.split(",").map((t) => t.trim()),
        };
      })
    );

    return dogs;
  } catch (error) {
    console.error(`Error en findNameDogApi: ${error.message}`);
    return [];
  }
};

////////////////////////////////////////////////

const createdNewDogWithTemps = async (
  name,
  height,
  weight,
  life_span,
  temperaments
) => {
  // Creamos la raza de perro en la base de datos:
  const newDog = await Dog.create({
    name,
    height,
    weight,
    life_span,
    image:
      "https://imengine.prod.srp.navigacloud.com/?uuid=e1dc4d68-fa49-5593-8efa-31221508e04e&type=primary&q=72&width=1200",
  });

  // Luego, busco los temperamentos correspondientes en la base de datos
  const dbTemperaments = await Promise.all(
    temperaments.map((temp) => {
      // Usamos "findOrCreate" para no hacer dos validaciones de buscar y luego crear si no esta la data buscada
      return Temperament.findOrCreate({
        where: { name: temp },
        defaults: { name: temp },
      });
    })
  );

  // Obtenemos los temperamentos creados o encontrados en la base de datos
  const createdTemperaments = dbTemperaments.map((temp) => temp[0]);

  // Asociamos o seteamos los temperamentos con la raza de perro creada
  await newDog.setTemperaments(createdTemperaments);

  // Por ultimo respondemos con la raza de perro creada y sus respectivos temperamentos asociados
  const dogWithTemperaments = await Dog.findByPk(newDog.id, {
    include: {
      model: Temperament,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });
  return dogWithTemperaments;
};

////////////////////////////////////////////////

const getDogDbTemperaments = async () => {
  // Busco si ya hay temperamentos en nuestra base de datos
  const temperaments = await Temperament.findAll({
    attributes: ["id", "name"],
  });
  if (temperaments.length > 0) return temperaments;
};

////////////////////////////////////////////////

const getDogApiTemperaments = async () => {
  // Si no tenemos temperamentos en la base de datos, hacemos una llamada a la API para obtenerlos
  const respuesta = await fetch("https://api.thedogapi.com/v1/breeds");
  const razasPerros = await respuesta.json();
  // Obtenemos la lista de temperamentos sin duplicados
  const allTemperaments = razasPerros.reduce((temperaments, breed) => {
    if (breed.temperament) {
      // Divido la cadena de texto de los temperamentos y los separo por coma
      // Luego recorro cada elemento y le quito los espacios
      const breedTemperaments = breed.temperament
        .split(", ")
        .map((temp) => temp.trim());
      breedTemperaments.forEach((temp) => {
        // Verifico que no se haya incluido temperamentos previamente a la lista
        if (!temperaments.includes(temp)) {
          temperaments.push(temp);
        }
      });
    }
    return temperaments;
  }, []);
  // Creamos o agregamos los temperamentos en nuestra base de datos
  const dbTemperamentsCreate = await Promise.all(
    allTemperaments.map((temp) => {
      Temperament.create({ name: temp });
    })
  );
  if (dbTemperamentsCreate) {
    const dbTemperamentsFind = await Temperament.findAll({
      attributes: ["id", "name"],
    });
    return dbTemperamentsFind;
  }
};

module.exports = {
  findDogsDb,
  findDogsApi,
  validateUuid,
  dataDogGetIdRaza,
  findNameDogDb,
  findNameDogApi,
  createdNewDogWithTemps,
  getDogDbTemperaments,
  getDogApiTemperaments,
};
