import React from "react";
import { useDispatch } from "react-redux";
import { getBreedDetail } from "../../redux/actions";
import { Link } from "react-router-dom";

const TemperamentList = ({ temperaments }) => {
  if (!Array.isArray(temperaments)) {
    return null;
  }
  return (
    <>
      {temperaments.map((temp) => (
        <li key={temp}>{temp}</li>
      ))}
    </>
  );
};

const DogCard = ({ breed }) => {
  const dispatch = useDispatch();

  const handleCardClick = () => {
    dispatch(getBreedDetail(breed.id));
  };

  return (
    <div className="breed-card" onClick={handleCardClick}>
      <div className="breed-image">
        <img width={120} src={breed.image} alt={breed.name} />
      </div>
      <div className="breed-info">
        <h1>{breed.name}</h1>
        <div>
          <h3>Temperaments:</h3>
          <TemperamentList key={breed.id} temperaments={breed.temperaments} />
        </div>
        <div>
          <h3>Weight:</h3>
          <h4>{breed.weight}</h4>
        </div>
        <button className="button-detail">
          <Link to={`/dogs/${breed.id}`} state={{ breed }}>
            Ver detalle
          </Link>
        </button>
      </div>
    </div>
  );
};

export default DogCard;
