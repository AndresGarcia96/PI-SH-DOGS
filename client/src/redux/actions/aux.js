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
