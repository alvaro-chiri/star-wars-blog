import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Planet = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    actions.getPlanet(id);
  }, []);

  return (
    <>
      <div className="personContainer">
        <div className="row">
          <img
            className="indPicture col"
            src="https://media.wired.co.uk/photos/606da2976a2b7484dab92f59/4:3/w_1704,h_1278,c_limit/star-wars-force-awakens-r2d2.jpg"
          />
          <div className="col text-center">
            <h1 className="indTitle">{store.planet.name}</h1>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
              tincidunt neque, id consectetur felis. Nam vitae lacus orci. Morbi
              congue laoreet fermentum. Donec at rhoncus odio, vitae suscipit
              enim. Morbi pharetra nibh est, eget vulputate quam dapibus semper.
              Suspendisse convallis felis sapien. Vivamus finibus venenatis
              dolor, faucibus eleifend arcu convallis nec. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Pellentesque habitant morbi tristique senectus et netus
              et malesuada fames ac turpis egestas. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Nullam id hendrerit enim. Proin faucibus feugiat nisl, a imperdiet
              mauris facilisis id. Integer convallis tincidunt commodo.
              Pellentesque vel mollis nunc, et commodo neque.
            </h4>
          </div>
        </div>
        <div className="row description">
          <div className="col">
            <h3> Climate:</h3>
            <h3>{store.planet.climate}</h3>
          </div>
          <div className="col">
            <h3>Population:</h3>
            <h3>{store.planet.population}</h3>
          </div>
          <div className="col">
            <h3>Orbital Period:</h3>
            <h3>{store.planet.orbital_period}</h3>
          </div>
          <div className="col">
            <h3>Rotation Period:</h3>
            <h3>{store.planet.rotation_period}</h3>
          </div>
          <div className="col">
            <h3>Diameter:</h3>
            <h3>{store.planet.diameter}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Planet;
