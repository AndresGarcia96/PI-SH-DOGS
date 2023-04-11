import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewDog } from "../../redux/actions/index";
import { useHistory } from "react-router-dom";
import Header from "../header/Header";
import "./formpage.css";

const FormPage = () => {
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
    <div>
      <form onSubmit={handleSubmit}>
        <div className="header">
          <Header />
        </div>
        {/* Aquí agregamos los campos del formulario */}
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <br />

        <label htmlFor="maxHeight">Altura:</label>
        <input
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleInputChange}
          required
        />

        <br />
        <label htmlFor="minWeight">Peso:</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleInputChange}
          required
        />

        <br />

        <label htmlFor="life_span">Años de vida:</label>
        <input
          type="number"
          id="life_span"
          name="life_span"
          value={formData.life_span}
          onChange={handleInputChange}
          required
        />

        <br />

        <label htmlFor="temperaments">Temperamentos:</label>
        <input
          type="text"
          id="temperaments"
          name="temperaments"
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
      </form>
    </div>
  );
};

export default FormPage;
