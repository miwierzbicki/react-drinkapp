import styles from "./Card.module.scss";
import React from "react";

const Card = ({ drinks, idDrink }) => {
    let display;
    const cardWidth = {
        width: "20rem",
        margin: "0.4rem"
    };


    console.log(drinks)
    if (drinks) {
       display = drinks.map((x)=>{
        let {idDrink, strDrink, strDrinkThumb} = x;
        return (
            <div key={idDrink} className="card col-4 mx-auto" style={cardWidth}>
                <img
                        className="card-img img-fluid"
                        src={strDrinkThumb}
                        alt="thumbnail"
                    />
                    <div className="card-body">
                        <h5 className="card-title">{strDrink}</h5>
                        <p className="card-text">Opis</p>
                        <a href="#" className="btn btn-primary">Przepis</a>
                    </div>
            </div>
        );
       });
    }
    else{
        display = "Nie znaleziono!"
    }

    return <>{display}</>;
};

export default Card;
