import React, { Component, Fragment } from 'react';

import Card from 'react-bootstrap/Card';

export const EateryCards = ({ eateryCards }) => {
  return (
    <Fragment>
      {eateryCards.map(eateryCard => (
        <Card>
          <Card.Header>
            {eateryCard.dba} - Grade: {eateryCard.grade}{' '}
          </Card.Header>

          <Card.Body>
            <Card.Text>
              Cuisine: {eateryCard.cuisine_description} <br />
              Address: {eateryCard.building} {eateryCard.street}, {eateryCard.boro}{' '}
              {eateryCard.zipcode} <br />
              Phone: {eateryCard.phone} <br />
              Violation Description: {eateryCard.violation_description} <br />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>
              Last updated: {eateryCard.grade_date}
            </small>
          </Card.Footer>
        </Card>
      ))}
    </Fragment>
  );
};
export default withRouter(EateryCard);