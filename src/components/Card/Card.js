
import React from "react";
import App from "../../App";
import { Link } from "react-router-dom";
import CardDetails from "./CardDetails";

const Card = ({ drinks, idDrink }) => {
    let display;
    const cardWidth = {
        width: "20rem",
        margin: "0.4rem",
        textDecoration: "none",
        color: "black"
    };


    console.log(drinks)
    if (drinks) {
       display = drinks.map((x)=>{
        let {idDrink, strDrink, strDrinkThumb} = x;

        return (
            <Link
                to={`${idDrink}`}
            key={idDrink} className="card col-4 mx-auto px-0" style={cardWidth}>
                <img
                        className="card-img img-fluid"
                        src={strDrinkThumb}
                        alt="thumbnail"
                    />
                    <div className="card-body">
                        <h3 className="card-title">{strDrink}</h3>

                    </div>
            </Link>
        );
       });
    }
    else{
        display = "Nie znaleziono!"
    }

    return <>{display}</>;
};

export default Card;
