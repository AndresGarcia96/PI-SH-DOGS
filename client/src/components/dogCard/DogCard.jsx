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
      {temperaments.map((temp, index) => (
        <li key={index}>{temp}</li>
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
          <h5>
            <TemperamentList key={breed.id} temperaments={breed.temperaments} />
          </h5>
        </div>
        <div>
          <h3>Weight:</h3>
          <h5>{breed.weight}</h5>
        </div>
        <div className="button-detail">
          <button>
            <Link to={{ pathname: `/dogs/${breed.id}`, state: { breed } }}>
              Ver detalle
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DogCard;
