import React from 'react';
import EateryCard from './EateryCard';

console.log("In Eatery List")

const EateryList = ( { eateriesGrades }) => {
  console.log("in EateryList ", eateriesGrades)
  return (
  <div className="cards">                     
    {eateriesGrades.map((eateryCard,index) => (                    
      <EateryCard
        key={index}
        dba={eateryCard.dba}
      />
    ))}     
  </div>

  ) //end return

}; //end EateryList

export default EateryList;