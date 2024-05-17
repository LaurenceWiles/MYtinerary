import { useState } from "react";
import { Button, Alert, Form } from "react-bootstrap";

const AddCity = ({ onCityAdded }) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [img, setImg] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const city = { name, country, img };

    try {
      const response = await fetch("http://localhost:4000/cities/all", {
        method: "POST",
        body: JSON.stringify(city),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to add city");
      }

      setName("");
      setCountry("");
      setImg("");
      setError(null);

      onCityAdded();
      setSuccessMessage("City successfully added");
      setTimeout(() => {
        setSuccessMessage("");
      }, 2000);
      console.log("new city added", city);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="add-city-form">
        <h2 className="text-center">Add a new city</h2>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCountry">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter country"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Upload a picture"
            onChange={(e) => setImg(e.target.value)}
            value={img}
          />
        </Form.Group>

        {successMessage && <Alert variant="success">{successMessage}</Alert>}
        <Button variant="secondary" type="submit">
          Add City
        </Button>
      </Form>
      ;
    </div>
  );
};

export default AddCity;

/*
  <Form className="add-city" onSubmit={handleSubmit}>
        <h2>Add a new city</h2>

        <label>Name:</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label>Country:</label>
        <input
          type="text"
          onChange={(e) => setCountry(e.target.value)}
          value={country}
        />
        <label>Img:</label>
        <input
          type="text"
          onChange={(e) => setImg(e.target.value)}
          value={img}
        />
        {successMessage && <Alert variant="success">{successMessage}</Alert>}
        <Button type="submit" variant="secondary">
          Add City
        </Button>
      </Form>
*/
