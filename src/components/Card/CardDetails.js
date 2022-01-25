import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import bootstrap from "bootstrap";


const CardDetails = ({drinks}) => {

    const cardWidth = {
        width: "50rem",
        margin: "0.4rem",
    };

    const imgProps = {

    }

    let {id} = useParams();
    const chosenDrink = drinks.find((x)=>x.idDrink===id);
    console.log(drinks);
    return (
        // <div>Tutaj info szczegolowe, id: {chosenDrink.strDrink}
        // <img src={chosenDrink.strDrinkThumb} alt="" />
        // <p>{chosenDrink.strInstructions}</p>
        // </div>
        <div className="card px-0" style={cardWidth}>
            <img
                src={chosenDrink.strDrinkThumb}
                alt="drink"
                className="card-img-top"
            />
            <div className="card-body">
                <h5 className="card-title">{chosenDrink.strDrink}</h5>
                <p className="card-text">{chosenDrink.strInstructions}</p>
            </div>
            <ul className="list-group-item">{chosenDrink.strIngredient1}</ul>
            <div className="card-body">
                <a href="#" className="card-link">
                    Link
                </a>
            </div>
        </div>
    );
}

export default CardDetails