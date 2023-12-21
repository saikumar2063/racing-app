import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  Button,
  Table,
} from "react-bootstrap";
import "./dashboard.css";
import styled from "styled-components";

const Header = styled.h3`
  font-weight: bold;
`;

function RunnerDetails() {
  const [details, setDetails] = useState({ name: "", speed: "", id: "" });
  const [addDetails, setAddDetails] = useState([]);
  // const [navigate, setNavigate] = useState(false);
  const navigateToPage = useNavigate();
  const handleChange = (e) => {
    if (e.target.value) {
      // console.log(details, "Details");
      setDetails({
        ...details,
        [e.target.name]: e.target.value,
        id: Math.random(),
      });
    }
  };

  const addRunner = () => {
    let totalDetails = addDetails && addDetails.length ? addDetails : [];
    if (details.name) {
      totalDetails.push(details);
    }
    setAddDetails(totalDetails);
    setDetails({ name: "", speed: "", id: "" });
  };

  const startRace = () => {
    // setNavigate(true);
    navigateToPage("/startRace");
  };
  return (
    <Container className="container">
      <Row>
        <Col md={4}>
          <Card className="card">
            <Header>RUNNER DETAILS</Header>
            <small>*you can add 10 participants</small>
            <label>Name :</label>
            <InputGroup>
              <Form.Control
                placeholder="Usian bolt"
                aria-label="Usian-bolt"
                aria-describedby="Usian bolt"
                name="name"
                onChange={handleChange}
              />
            </InputGroup>
            <label>Speed :</label>
            <InputGroup>
              <Form.Control
                placeholder="20km/hr"
                aria-label="speed km/hr"
                aria-describedby="speed km/hr"
                name="speed"
                onChange={handleChange}
              />
            </InputGroup>
            <label>Start time :</label>
            <InputGroup>
              <Form.Control
                placeholder="10:00"
                aria-label="starttime"
                aria-describedby="starttime"
              />
            </InputGroup>
            <br />
            <Button onClick={addRunner}>+ Add Runner</Button>
          </Card>
        </Col>
        <Col md={8}>
          <Card className="listOfParticipants">
            <div style={{ height: "80vh" }}>
              <Header>LIST OF PARTICIPANTS</Header>
              <Table striped borderd hover variant="light">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Speed</th>
                    <th>Start time</th>
                    <th>End time</th>
                  </tr>
                </thead>
                <tbody>
                  {addDetails.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.speed}</td>
                        <td> - </td>
                        <td> - </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
            <div className="button">
              <Button onClick={startRace}>Start Race + </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default RunnerDetails;
