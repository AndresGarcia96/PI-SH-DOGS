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
      through: { attributes: [] },
    },
  });
  if (dbDogs.length > 0) return dbDogs;
};

////////////////////////////////////////////////

const findNameDogApi = async (name) => {
  const data = await fetch(
    `https://api.thedogapi.com/v1/breeds/search?q=${name}`
  );
  const apiData = await data.json();
  if (apiData.length > 0) {
    // Se crea un objeto mapeando toda la info que encontramos en la data de respuesta
    const dogsApi = apiData.map((dog) => {
      return {
        id: dog.id,
        name: dog.name,
        weight: dog.weight.metric,
        height: dog.height.metric,
        life_span: dog.life_span,
        image: dog.image?.url || null,
        createdInDb: false,
        // Se une todo lo que arroje la data que se encuentre en "temperament" en un array
        temperaments: dog.temperament?.split(",").map((t) => t.trim()),
      };
    });
    return dogsApi;
  }
};

////////////////////////////////////////////////
