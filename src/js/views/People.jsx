import React, { useEffect, useState } from "react";
import { getAllPeople } from "../component/api";

function People() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fn = async () => {
      const apiPeople = await getAllPeople();
      return setPeople(apiPeople);
    };
    fn();
  }, []);

  return (
    <>
      <div style={{display: "flex", overflowX: "scroll", flexWrap: "none", flexShrink: "0"}}>
        {people.map( (item, index) => 
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

export default People;
