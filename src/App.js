import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import Search from "./components/Search/Search";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Button from "react-bootstrap";
import CardDetails from "./components/Card/CardDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return(
        <div className="App">
            <Home/>
        </div>
    )
}

const Home = () => {
    let [search, updateSearch] = useState("");
    let api = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
    let [fetchedData, updateFetchedData] = useState([]);
    let { drinks } = fetchedData;
    //console.log(fetchedData)
    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            updateFetchedData(data);
        })();
    }, [api]);


    const justifyCardDetails = {
        justifyContent:"center"
    }
    return (
        <div className="App">
            <Navbar />
            <div className="container">
                <div className="row">
                    <Search updateSearch={updateSearch} />
                </div>
                <div className="row">
                    <div
                        className="col
                  "
                    >
                        <div className="row" style={justifyCardDetails}>
                                <Router>
                                <Routes>

                                    <Route path="/" element={<Card drinks={drinks}/>}/>

                                    <Route path="/:id" element={<CardDetails drinks={drinks}/>}/>
                                </Routes>
                            </Router>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
