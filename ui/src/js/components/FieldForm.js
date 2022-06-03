import '../../stylesheets/App.css';
import { React, useState, createContext } from "react";
import { Form, Row, Col, Button, InputGroup, FormControl } from "react-bootstrap";
import { FormButton } from "./FormButton";
import { ChoiceList } from "./ChoiceList";

import { FieldService } from "../models/FieldService.js";

export const FormContext = createContext();
const initFormData = new FieldService();
export function FieldForm() {
    const [formdata, setFormData] = useState(initFormData);
    const [errorLabel, setErrorLabel] = useState(false);
    const [errorDefault, setErrorDefault] = useState(false);
    const [errorChoices, setErrorChoices] = useState(false);
    const [validated, setValidated] = useState(false);
    const [choice, setChoice] = useState("");


    // Choice input handler
    const onChoiceKeyPress = (event) => {
        let newChoice = choice + String.fromCharCode(event.which)
        setChoice(newChoice)
/*         if (event.which == 13) {
            // Check choice distinct
            newChoice = newChoice.trim()
            if (formdata.choices.includes(newChoice)) {
                setErrorChoices(true);
            } else {
                setFormData(formdata.choices.push(newChoice))
                console.log(formdata.choices)
            }

            // Check choices array length <= 50 && > 2
        } */
        console.log("Keypress Handler: " + formdata.choices) 
    }

    function onChoiceAdd() {
        if (this.choice != "" && this.choice != undefined && this.formdata.choices != [] && this.formdata.choices.includes(choice)) {
            setErrorChoices(true);
        } else {
            setFormData(this.formdata.choices.push(choice))
            console.log(this.formdata.choices)
        }
    }

    // Choice change handler
    const onChoiceChange = (choice) => {
        // Check choice length <= 40 characters

    }

    // Choice delete handler
    const onChoiceDelete = (formdata, choice) => {

    }

    // Form validation
    const validateForm = (formdata) => {

    }

    // Validate Label
    const validateLabel = (formdata) => {

    }

    // Validate Default Value

    // Validate Choices

    // Handle Submit
    const handleFormSubmit = (event, formdata) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    }

    return (
      <>
        <FormContext.Provider value={{formdata, setFormData}}>
            <Form className="p-3" onSubmit={handleFormSubmit}>
            <Form.Group
                as={Row}
                className="mb-3 d-flex align-items-center"
                controlId="formHorizontalLabel"
            >
                <Form.Label column sm={3} md={2}>
                Label
                </Form.Label>
                <Col sm={9} md={10}>
                <Form.Control type="text" placeholder="Label" required isValid={formdata.label && !errorLabel}/>
                <Form.Control.Feedback type="invalid">Label is required.</Form.Control.Feedback>
                </Col>
            </Form.Group>
            <Form.Group
                as={Row}
                className="mb-3 d-flex align-items-center"
                controlId="formHorizontalType"
            >
                <Form.Label column sm={3} md={2}>
                Type
                </Form.Label>
                <Col sm={9} md={10} className="d-flex flex-row">
                <div>
                    <Form.Check.Label className="me-3">Multi-Select</Form.Check.Label>
                </div>
                <div className="d-flex flex-row align-items-center">
                    <Form.Check.Input sm={6} className="me-2" type="checkbox" />
                    <Form.Text className="text-muted">
                    Require Multi-Select Value
                    </Form.Text>
                </div>
                </Col>
            </Form.Group>
            <Form.Group
                as={Row}
                className="mb-3 d-flex align-items-center"
                controlId="formHorizontalDefault"
            >
                <Form.Label column sm={3} md={2}>
                Default Value
                </Form.Label>
                <Col sm={9} md={10}>
                <Form.Control type="text" placeholder="Default Value" required isValid={formdata.default && !errorDefault} />
                <Form.Control.Feedback type="invalid">Default value is required.</Form.Control.Feedback>
                </Col>
            </Form.Group>
            <Form.Group
                as={Row}
                className="mb-3 d-flex align-items-center"
                controlId="formHorizontalChoices"
            >
                <Form.Label column sm={3} md={2}>
                Choices
                </Form.Label>
                <Col sm={9} md={10}>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Choice"
                        aria-describedby="basic-addon2"
                        onKeyPress={onChoiceKeyPress}
                        isValid={errorChoices} 
                        />
                        <Button className="bg-teal" id="button-addon2" onClick={onChoiceAdd}>
                        Add Choice
                        </Button>
                    </InputGroup>
                </Col>
                <Col sm={{ span: 9, offset: 3 }} md={{ span: 10, offset: 2 }}>
                <Form.Control.Feedback type="invalid">Choice must be unique and under 40 characters.</Form.Control.Feedback>
                </Col>
                <Col
                sm={{ span: 9, offset: 3 }}
                md={{ span: 10, offset: 2 }}
                className="my-3"
                >
                    <ChoiceList choices={formdata.choices} />
                </Col>
            </Form.Group>
            <Form.Group
                as={Row}
                className="mb-3 d-flex align-items-center"
                controlId="formHorizontalOrder"
            >
                <Form.Label column sm={3} md={2}>
                Order
                </Form.Label>
                <Col sm={9} md={10}>
                <Form.Select aria-label="Default select example">
                    <option value="1">Display Choices Alphabetically</option>
                </Form.Select>
                </Col>
            </Form.Group>
            <Form.Group
                as={Row}
                className="mb-3 mt-4 d-flex align-items-center justify-content-center"
            >
                <Col
                xs={4}
                sm={3}
                md={2}
                lg={1}
                className="d-flex align-items-center justify-content-center my-2"
                >
                <FormButton />
                </Col>
                <Col
                xs={4}
                sm={3}
                md={2}
                lg={1}
                className="d-flex align-items-center justify-content-center my-2"
                >
                <Button variant="warning">Clear</Button>
                </Col>
                <Col
                xs={12}
                className="d-flex align-items-center justify-content-center my-2 px-0"
                >
                <div>
                    Or
                    <a href="#" className="ms-2 text-danger">
                    Cancel
                    </a>
                </div>
                </Col>
            </Form.Group>
            </Form>
        </FormContext.Provider>
      </>
    );
  }
  