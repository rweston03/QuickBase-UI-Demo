import '../../stylesheets/App.css';
import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

export function Choice(props) {
  return (
    <>
      <Card className="my-1">
        <Card.Body
          as={Row}
          className="justify-content-space-between align-items-center py-1"
        >
          <Col xs={10}>
            <div>{props.choice}</div>
          </Col>
          <Col xs={2} className="d-flex flex-row justify-content-end py-0">
            <Button variant="danger" className="btn-sm">
              X
            </Button>
          </Col>
        </Card.Body>
      </Card>
    </>
  );
}