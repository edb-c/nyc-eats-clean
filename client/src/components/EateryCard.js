import React  from 'react';

const EateryCard = ({ 
  dba , grade, cuisine_description, 
  building, street, boro, zipcode, 
  phone, violation_description, 
  grade_date}) => {

    return (
    <div className="card">
        <div className="card-header">
           Eatery Name: {dba} <br />
           Grade: { grade }
         </div>   
           <div className="card-text">
             Cuisine: {cuisine_description} <br />
             Address: {building} {street} <br />
             Boro: {boro}, NY {zipcode} <br />
             Phone: {phone}
           </div>     
           <div className="card-footer"><small className="text-muted">
              Violation Description: {violation_description} <br />
              Last Updated: {grade_date}
           </small>
           </div>
    </div>

)//end return
};

export default EateryCard