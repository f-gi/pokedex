import React from 'react';
import { useParams } from 'react-router-dom';

function Details() {
  const { id } = useParams<{ id: string }>();

  return <h1>Pokemon Detail ID: {id}</h1>;
}

export default Details;
