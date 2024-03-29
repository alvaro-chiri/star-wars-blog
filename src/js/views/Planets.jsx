import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, Button, Col, Row } from "react-bootstrap";

const Planets = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div
        style={{
          display: "flex",
          overflowX: "scroll",
          flexWrap: "none",
          flexShrink: "0",
        }}
      >
        {store.planets.map((item, index) => {
          return (
            <Col key={index}>
              <Card
                className="bg-white text-black"
                style={{ width: "18rem", marginLeft: "10px" }}
              >
                <Card.Img
                  className="imagen"
                  variant="top"
                  src="https://media.wired.co.uk/photos/606da2976a2b7484dab92f59/4:3/w_1704,h_1278,c_limit/star-wars-force-awakens-r2d2.jpg"
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Link to={"/planets/" + item.uid}>
                    <Button variant="primary">Learn More</Button>
                  </Link>
                  <Button className="favButton heart" variant="warning" onClick={ () => actions.addFavorite(item.name, item.uid, "planets")}>
                    <i className="far fa-heart" />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </div>
    </>
  );
};

export default Planets;
