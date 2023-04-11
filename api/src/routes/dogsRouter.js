const { Router } = require("express");
const dogsRouter = Router();
const {
  findDogsDb,
  findDogsApi,
  validateUuid,
  dataDogGetIdRaza,
  findNameDogDb,
  findNameDogApi,
  createdNewDogWithTemps,
  getDogDbTemperaments,
  getDogApiTemperaments,
} = require("../controllers/dogsControllers");
const { Dog, Temperament } = require("../db");
const { Op } = require("sequelize");

///////////// 📍📍📍 GET | /dogs 📍📍📍 /////////////

dogsRouter.get("/", async (req, res) => {
  try {
    const dogsDb = await findDogsDb();
    const dogsApi = await findDogsApi();

    if (dogsDb && dogsApi) {
      const combinedDogs = dogsApi.concat(dogsDb); // <<== AQUI PUEDO AGREGAR "dogsDb"
      res.status(200).json(combinedDogs);
    }
    ////// Si NO se encuentra en la base de datos, lo mando a buscar a la api
    else if (dogsApi) {
      res.status(200).json(dogsApi);
    } else {
      res
        .status(200)
        .send("No se encontraron perros en la base de datos ni en la API");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

///////////// 📍📍📍 GET | /dogs/:idRaza 📍📍📍 /////////////

dogsRouter.get("/id/:idRaza", async (req, res) => {
  const { idRaza } = req.params;

  try {
    // Si la raza SI se encuentra en la base de datos, devolvemos el objeto con los datos de la raza y los datos de los temperamentos
    const dogIdDb = await validateUuid(idRaza);
    const dogIdApi = await dataDogGetIdRaza(idRaza);
    if (dogIdDb) {
      res.status(200).json(dogIdDb);
    } else if (dogIdApi) {
      res.status(200).json(dogIdApi);
    } else {
      // Si no encontramos resultados ni en la base de datos ni en la API, enviamos un mensaje de error
      res
        .status(400)
        .send(
          `No se encontró ninguna raza de perro en la base de datos, ni en la api con el ID: "${idRaza}"`
        );
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

///////////// 📍📍📍 GET | /dogs/name?="..." 📍📍📍 /////////////

dogsRouter.get("/name", async (req, res) => {
  const { name } = req.query;

  const nameDogDb = await findNameDogDb(name);
  const nameDogApi = await findNameDogApi(name);

  try {
    if (nameDogDb && nameDogApi) {
      // Se crea una variable donde se une la data de la base de datos y de la api
      const combinedName = nameDogApi.concat(nameDogDb);
      res.status(200).json(combinedName);
    }
    // Si no encontramos la raza en nuestra base de datos, buscamos en la API
    else if (nameDogApi) {
      res.status(200).json(nameDogApi);
    } else {
      // Si no encontramos resultados ni en la base de datos ni en la API, enviamos un mensaje de error
      res
        .status(400)
        .send(
          `No se encontró ninguna raza de perro que coincida con: "${name}"`
        );
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

///////////// 📍📍📍 POST | /dogs 📍📍📍 /////////////

dogsRouter.post("/", async (req, res) => {
  // Pasamos los datos que queremos solicitar por body:
  const { name, height, weight, life_span, temperaments } = req.body;

  try {
    const createdNewDog = await createdNewDogWithTemps(
      name,
      height,
      weight,
      life_span,
      temperaments
    );
    if (createdNewDog) {
      res.status(200).json(createdNewDog);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

///////////// 📍📍📍 GET | /temperaments 📍📍📍 /////////////

dogsRouter.get("/temperaments", async (req, res) => {
  const { temperament } = req.query;
  try {
    // Si hay temperamentos almacenados, los envio como respuesta
    const getTempDb = await getDogDbTemperaments();
    const getTempApi = await getDogApiTemperaments();

    if (getTempDb && getTempApi) {
      const combinatedTemps = getTempApi.concat(getTempDb);
      res.status(200).json(combinatedTemps);
    } else if (getTempApi) {
      // Enviamos los temperamentos como respuesta
      res.status(200).json(getTempApi);
    } else {
      res
        .status(400)
        .send(
          "Lo siento, no se encontraron Temperamentos en la base de datos ni en la api :("
        );
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = dogsRouter;
