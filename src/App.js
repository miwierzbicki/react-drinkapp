import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import Search from "./components/Search/Search";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";
import Card from './components/Card/Card';

function App() {
    let api = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=sour`;
    let [fetchedData, updateFetchedData] = useState([]);
    let { drinks} = fetchedData; //destrukturyzacja

    useEffect(()=>{
        (async function() {
            let data = await fetch(api).then((res)=>res.json());
            updateFetchedData(data);
        })();
    }, [api]); //watcher na api, jezeli sie zmieni to zaladuje ponownie z api
  return (
      <div className="App">
          <Navbar/>
          <div className="container">
              <div className="row">
                  <Search/>
              </div>
              <div className="row">

                  <div className="col
                  ">
                      <div className="row">
                          <Card drinks={drinks}/>

                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
