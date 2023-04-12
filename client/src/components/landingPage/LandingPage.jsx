import React, { Component } from "react";
import "./landingPage.css";
// Uso la funcion "withRouter" que proporciona acceso a las props del router, incluyendo history
// se usa esta funcion porque es un componente clase, sino se usa el hook "useHistory" directamente
import { withRouter } from "react-router";

class LandingPage extends Component {
  handleEnterClick = () => {
    this.props.history.push("/home");
  };

  render() {
    return (
      <div className="landing-page">
        <h1>Welcome To Henry Dogs</h1>
        <button onClick={this.handleEnterClick}>Enter To Store</button>
      </div>
    );
  }
}

export default withRouter(LandingPage);
