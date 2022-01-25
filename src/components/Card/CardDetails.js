import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import bootstrap from "bootstrap";
import styles from "./CardDetails.module.scss";

const CardDetails = ({drinks}) => {

    const cardWidth = {
        width: "30rem",
        margin: "0.4rem",
    };



    let {id} = useParams();
    const chosenDrink = drinks.find((x)=>x.idDrink===id);
    console.log(drinks);
    return (

        <div class="card px-0" style={cardWidth}>
            <img
                src={chosenDrink.strDrinkThumb}
                class="card-img-top img-fluid "
                alt="..."
            />

            <div class="card-body">
                <h5 class="card-title">
                    {chosenDrink.strDrink}{" "}
                    <span class="badge bg-danger">
                        {chosenDrink.strAlcoholic}
                    </span>
                </h5>
            </div>
            <ul class="list-group list-group-flush">
                {/* <div className="card-header "> Składniki:</div> */}
                <li class="list-group-item">
                    {chosenDrink.strIngredient1}{" "}
                    <span className="badge bg-primary">
                        {chosenDrink.strMeasure1}
                    </span>
                </li>
                <li class="list-group-item">
                    {chosenDrink.strIngredient2}{" "}
                    <span className="badge bg-primary">
                        {chosenDrink.strMeasure2}
                    </span>
                </li>
                <li class="list-group-item">
                    {chosenDrink.strIngredient3}{" "}
                    <span className="badge bg-primary">
                        {chosenDrink.strMeasure3}
                    </span>
                </li>
            </ul>
            <div className="card-header ">
                {" "}
                Szklanka: {chosenDrink.strGlass}
            </div>
            <div class="card-body">
                <p class="card-text">{chosenDrink.strInstructions}</p>
            </div>
            <div className="card-footer">id drinka: {chosenDrink.idDrink}</div>
        </div>
    );
}

export default CardDetails