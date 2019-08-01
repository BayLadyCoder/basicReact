// This component shows a single Pokemon with their names, images, and types
import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  render() {
    let name = this.props.name;
    let id = this.props.id;
    let type = this.props.type;
    let exp = this.props.exp;

    let img_api =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    let img = img_api + id + ".png";

    return (
      <div className="Pokecard">
        <h2 className="Pokecard-name">{name}</h2>
        <img className="Pokecard-img" src={img} />
        <div className="Pokecard-info">
          <p className="Pokecard-info-type">Type: {type}</p>
          <p className="Pokecard-info-exp">Exp: {exp}</p>
        </div>
      </div>
    );
  }
}

export default Pokecard;
