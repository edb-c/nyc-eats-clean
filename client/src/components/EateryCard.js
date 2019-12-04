import React  from 'react';
import PropTypes from 'prop-types';

const EateryCard = ({ eateriesGrades }) => {
    console.log("in Eatery Card-", eateriesGrades)

    return (
    <div className="card">
 <div className="cards">                     
        
  </div>

   </div>  

)//end return
};
EateryCard.propTypes = {
   eateriesGrades: PropTypes.object.isRequired
 }
export default EateryCard;
/*        <div className="card-header">
         Eatery Name: {eateryCard.dba}<br />
         Grade: {eateryCard.grade}                    
        </div>                 
        <div className="card-text">
           Cuisine: {eateryCard.cuisine_description} <br />
           Address: {eateryCard.building} {eateryCard.street}, 
           {eateryCard.boro}
           {" "}
           {eateryCard.zipcode} <br />
           Phone: {eateryCard.phone} <br />
           Violation Description: 
           {eateryCard.violation_description} <br />
        </div>
       <div className="card-text"><small className="text-muted">Last updated {eateryCard.grade_date}</small></div>
       */
      