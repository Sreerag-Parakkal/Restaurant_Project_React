import React, { useEffect, useState } from "react";
import { Accordion, Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function RestDetails() {
  const { id } = useParams();
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    let fetchRestaurant = async () => {
      let data = await fetch("/restaurants.json")
        .then((res) => res.json())
        .catch((err) => console.log(err));

      console.log();
      setRestaurants(data.restaurants);
    };
    fetchRestaurant();
  }, []);
  let findRestaurant = restaurants.find((item) => item.id == id);
  console.log(findRestaurant);
  return (
    <>
      {findRestaurant && (
        <Card>
          <Row className="m-3">
            <Col md="4">
              <Card.Img src={`${findRestaurant.photograph}`} />
            </Col>
            <Col md="8">
              <Card.Body>
                <Card.Title>{`${findRestaurant.name}`}</Card.Title>
                <Card.Text>
                  <br />
                  <strong>Address:</strong> {`${findRestaurant.address}`}
                  <br />
                  <br />
                  <h5>Coustomer Reviews</h5>
                  <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{`${findRestaurant.reviews[0].name}, Rating: ${findRestaurant.reviews[0].rating}`}</Accordion.Header>
        <Accordion.Body>
           <p>{`${findRestaurant.reviews[0].date}`}</p>
           <p>{`${findRestaurant.reviews[0].comments}`}</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
      <Accordion.Header>{`${findRestaurant.reviews[1].name}, Rating: ${findRestaurant.reviews[1].rating}`}</Accordion.Header>
        <Accordion.Body>
           <p>{`${findRestaurant.reviews[1].date}`}</p>
           <p>{`${findRestaurant.reviews[1].comments}`}</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
      <Accordion.Header>{`${findRestaurant.reviews[2].name}, Rating: ${findRestaurant.reviews[2].rating}`}</Accordion.Header>
        <Accordion.Body>
           <p>{`${findRestaurant.reviews[2].date}`}</p>
           <p>{`${findRestaurant.reviews[2].comments}`}</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                </Card.Text>
                <br />
                <Card.Text>
                  OPERATING HOURS <br />
                  <br />
                  <strong>Mon:</strong>&nbsp;
                  {`${findRestaurant.operating_hours.Monday}`}
                  <br />
                  <strong>Tue:</strong>&nbsp;
                  {`${findRestaurant.operating_hours.Tuesday}`}
                  <br />
                  <strong>Wed:</strong>&nbsp;
                  {`${findRestaurant.operating_hours.Wednesday}`}
                  <br />
                  <strong>Thu:</strong>&nbsp;
                  {`${findRestaurant.operating_hours.Thursday}`}
                  <br />
                  <strong>Fri:</strong>&nbsp;
                  {`${findRestaurant.operating_hours.Friday}`}
                  <br />
                  <strong>Sat:</strong>&nbsp;
                  {`${findRestaurant.operating_hours.Saturday}`}
                  <br />
                  <strong>Sun:</strong>&nbsp;
                  {`${findRestaurant.operating_hours.Sunday}`}
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      )}
    </>
  );
}

export default RestDetails;
