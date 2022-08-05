import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"

const Planets = () => {
  const {store, actions} = useContext(Context)

  return (
    <>
      <div style={{display: "flex", overflowX: "scroll", flexWrap: "none", flexShrink: "0"}}>
        {store.planets.map( (item, index) => 
          <div key={index} className="card" style={{width: "18rem", display: "inline-block", margin: "10px", flexShrink: "0"}}>
            <img src="https://picsum.photos/400/200" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">
                {item.url}
              </p>
              <a href="#" className="btn btn-primary">
                Learn more!
              </a>
              <a href="#" className="favButton btn btn-warning">
              ♡
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Planets;