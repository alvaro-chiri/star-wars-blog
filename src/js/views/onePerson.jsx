import React, { useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Person = () => {
  const { store, actions } = useContext(Context);
    const { id } = useParams();

  useEffect(() => {
    actions.getPerson(id)
  }, []);

  return (
    <>
      <h1>
        {store.person.name}
      </h1>
      <h2>
        {store.person.gender}
      </h2>
    </>
  );
};

export default Person;
