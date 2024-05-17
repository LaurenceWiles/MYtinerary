import React from "react";
import { Form } from "react-bootstrap";

const CitiesInput = ({ onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="cities-input">
      <Form>
        <h2 className="text-center">Find a city</h2>
        <Form.Group className="mb-3" controlId="formBasicFindCity">
          <Form.Control
            type="text"
            placeholder="Search cities"
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default CitiesInput;
