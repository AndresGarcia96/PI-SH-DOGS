import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBreedDetail } from "../../redux/actions/index";
import Header from "../header/Header";

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

const DogDetail = (props) => {
  const dispatch = useDispatch();
  const breedDetail = useSelector((state) => state.breedDetail);
  const { id } = props.match.params;

  useEffect(() => {
    dispatch(getBreedDetail(id));
  }, [dispatch, id]);

  return (
    <div className="breeddetail-container">
      <div className="header">
        <Header />
      </div>
      <div className="breed-detail">
        <div className="breed-image">
          <img src={breedDetail.image?.url} alt={breedDetail.name} />
        </div>

        <div className="breed-info">
          <hr />

          <h2>{breedDetail.name}</h2>
          <hr />

          <h4>Weight:</h4>
          <h5>{breedDetail.weight} </h5>

          <h4>Height:</h4>
          <h5>{breedDetail.height} </h5>

          <h4>Lifespan:</h4>
          <h5>{breedDetail.life_span}</h5>

          <hr />
          <div>
            <strong>Temperaments:</strong>
            <TemperamentList
              key={breedDetail.id}
              temperaments={breedDetail.temperaments}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogDetail;
