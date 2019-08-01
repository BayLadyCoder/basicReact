// This component shows a single Pokemon with their names, images, and types
import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  render() {
    let name = this.props.name;
    let id = this.props.id.toString();
    let type = this.props.type;
    let exp = this.props.exp;
    let idLength = id.length;

    if (idLength < 3) {
      if (idLength === 2) {
        id = "0" + id;
      } else {
        id = "00" + id;
      }
    }

    // console.log(id);

    let img_api = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
    let img = img_api + id + ".png";

    return (
      <div className="Pokecard">
        <h2 className="Pokecard-name">{name}</h2>
        <img className="Pokecard-img" src={img} alt={name} />
        <div className="Pokecard-info">
          <p className="Pokecard-info-type">Type: {type}</p>
          <p className="Pokecard-info-exp">Exp: {exp}</p>
        </div>
      </div>
    );
  }
}

export default Pokecard;
