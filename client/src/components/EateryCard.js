import React  from 'react';
import moment from 'moment';

const EateryCard = ({ 
  dba , grade, cuisine_description, 
  building, street, boro, zipcode, 
  phone, violation_description, 
  grade_date}) => {

  const fmt_gradeDate = moment(grade_date).calendar();
    console.log(fmt_gradeDate)

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
              Grade Date: {fmt_gradeDate}
           </small>
           </div>
    </div>

)//end return
};

export default EateryCard