import React, { Fragment } from 'react';
import EateryCard from './EateryCard';

console.log("In Eatery List")

const EateryList = ( { eateriesGrades }) => {
  console.log("in EateryList ", eateriesGrades)

  return (
  <Fragment>
    <h1 className='display-4 text-center'>
      New York Health Inspection Results
    </h1>  
    <div className="cards">                     
      {eateriesGrades.map((eateryCard,index) => (        
                  
        <EateryCard
          key={index}
          dba={eateryCard.dba}
          grade={eateryCard.grade}
          cuisine={eateryCard.cuisine_description} 
          address={eateryCard.building} 
          street={eateryCard.street}
          boro={eateryCard.boro}
          zip={eateryCard.zipcode}
          phone={eateryCard.phone}
          violationDescription= {eateryCard.violation_description}
          grade_date={eateryCard.grade_date}
        />
      ))}     
    </div>
  </Fragment>  
  ) //end return

}; //end EateryList

export default EateryList;
