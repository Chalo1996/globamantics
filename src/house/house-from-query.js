import { useParams } from "react-router-dom";
import House from ".";

import React from 'react'

const HouseFromQuery = ( { allHouses } ) => {
  const { id } = useParams();
  const house = allHouses.find( house => house.id === parseInt( id ) );

  if ( !house ) {
    return (
      <div>House Not Found.</div>
    );
  }
  return (
    <House house={house} />
  );


};

export default HouseFromQuery;
