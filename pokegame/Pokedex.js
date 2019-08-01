import React, { Component } from "react";
import "./Pokedex.css";
import Pokecard from "./Pokecard";

class Pokedex extends Component {
  render() {
    let title;

    if (this.props.isWinner) {
      title = <p className="Pokedex-winner">Winning Hand</p>;
    } else {
      title = <p className="Pokedex-loser">Losing Hand</p>;
    }

    return (
      <div className="Pokedex">
        <h2>
          {/* {this.props.isWinner ? (
            <p className="Pokedex-winner">Winning Hand</p>
          ) : (
            <p className="Pokedex-loser">Losing Hand</p>
          )} */}
          {title}
        </h2>
        <h4>Total Experience: {this.props.exp}</h4>

        <div className="Pokedex-cards">
          {this.props.pokemon.map(pokemon => (
            <Pokecard
              name={pokemon.name}
              id={pokemon.id}
              type={pokemon.type}
              exp={pokemon.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
