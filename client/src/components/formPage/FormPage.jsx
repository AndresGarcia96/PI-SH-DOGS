import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createNewDog } from "../../redux/actions/index";
import Header from "../header/Header";
import "./formpage.css";

const FormPage = (props) => {
  const history = useHistory();

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    temperaments: [],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGoBack = () => {
    props.history.goBack();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validaciones
    const { name, height, weight, temperaments } = formData;
    if (!name) {
      alert("Debe ingresar un nombre para la raza");
      return;
    }
    if (!/^[a-zA-Z\s]*$/.test(name)) {
      alert("El nombre no puede contener números ni caracteres especiales");
      return;
    }
    if (!height || !weight) {
      alert("Debe completar todos los campos de altura y peso");
      return;
    }

    if (!temperaments || temperaments.length === 0) {
      alert("Debe seleccionar al menos un temperamento");
      return;
    }

    dispatch(createNewDog(formData)).then(() => history.push("/home"));
  };

  return (
    <div className="form-create">
      <form onSubmit={handleSubmit} className="form-createnewdog">
        <div className="header">
          <Header />
        </div>
        <h2>DATA TO CREATE A NEW DOG</h2>
        {/* Aquí agregamos los campos del formulario */}
        <label className="form-name" htmlFor="name">
          Name:
        </label>
        <input
          className="input-createdog"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          placeholder="Breed name... Ej. Pitbull"
          onChange={handleInputChange}
          required
        />

        <br />

        <label className="form-height" htmlFor="Height">
          Height:
        </label>
        <input
          className="input-createdog"
          type="number"
          id="height"
          name="height"
          placeholder="Ej. 45-54 cm"
          value={formData.height}
          onChange={handleInputChange}
          required
        />

        <br />

        <label className="form-weight" htmlFor="Weight">
          Weight:
        </label>
        <input
          className="input-createdog"
          type="number"
          id="weight"
          name="weight"
          placeholder="Ej. 45-54 kg"
          value={formData.weight}
          onChange={handleInputChange}
          required
        />

        <br />

        <label className="form-lifespan" htmlFor="life_span">
          Life Span:
        </label>
        <input
          className="input-createdog"
          type="number"
          id="life_span"
          name="life_span"
          value={formData.life_span}
          placeholder="Ej. 8-13 years"
          onChange={handleInputChange}
          required
        />

        <br />

        <label className="form-temperament" htmlFor="temperaments">
          Temperaments:
        </label>
        <input
          className="input-createdog"
          type="text"
          id="temperaments"
          name="temperaments"
          placeholder="Temperaments... Ej. Active, Curious, Playful, Confident, Intelligent, Courageous"
          value={formData.temperaments}
          onChange={(e) => {
            const selectedTemperaments = e.target.value.split(",");
            setFormData({
              ...formData,
              temperaments: selectedTemperaments,
            });
          }}
        />

        <br />

        <button className="createdNewDog" type="submit" onClick={handleSubmit}>
          Create New Dog
        </button>

        <div className="back-button-detail">
          <button onClick={handleGoBack}>Go Back</button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;
