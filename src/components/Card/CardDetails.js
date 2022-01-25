import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import bootstrap from "bootstrap";


const CardDetails = ({drinks}) => {

    const cardWidth = {
        width: "30rem",
        margin: "0.4rem",
    };



    let {id} = useParams();
    const chosenDrink = drinks.find((x)=>x.idDrink===id);
    console.log(drinks);
    return (


        <div className="card px-0">
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src={chosenDrink.strDrinkThumb}
                        alt=""
                        className="img-fluid rounded-start"
                    />
                </div>
                <div className="col md-8">
                    <div className="card-body">
                        <h3 className="card-title">{chosenDrink.strDrink}</h3>
                        Typ:
                        {chosenDrink.strAlcoholic === "Alcoholic" ? (
                            <span className="badge bg-danger">
                                {chosenDrink.strAlcoholic}
                            </span>
                        ) : (
                            <span className="badge bg-success">
                                {chosenDrink.strAlcoholic}
                            </span>
                        )}
                        <p className="card-text">costam</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardDetails