import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBreedDetail } from "../../redux/actions/index";
import Header from "../header/Header";
import "./dogDetail.css";

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

const DogDetail = (props) => {
  const dispatch = useDispatch();

  const breedDetail = useSelector((state) => state.breedDetail);

  const { id } = props.match.params;

  useEffect(() => {
    dispatch(getBreedDetail(id));
  }, [dispatch, id]);

  const handleGoBack = () => {
    props.history.goBack();
  };

  return (
    <div className="breeddetail-container">
      <div className="header">
        <Header />
      </div>
      <div className="breeddetail-view">
        <div className="breed-id-detail">
          <h2> id # {breedDetail.id}</h2>
          <hr />
        </div>
        <hr />

        <div className="breed-image-detail">
          <img src={breedDetail.image?.url} alt={breedDetail.name} />
        </div>

        <div className="breed-info-detail">
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
          <div className="breed-detail-temps">
            <strong>Temperaments:</strong>
            <TemperamentList
              key={breedDetail.id}
              temperaments={breedDetail.temperaments}
            />
          </div>
        </div>
        <div className="back-button-detail">
          <button onClick={handleGoBack}>Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default DogDetail;
