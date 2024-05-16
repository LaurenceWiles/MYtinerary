import { useState } from "react";
import { Button } from "react-bootstrap";

const AddCity = ({ onCityAdded }) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [img, setImg] = useState("");
  const [error, setError] = useState(null);

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
      console.log("new city added", city);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form className="add-city" onSubmit={handleSubmit}>
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
        <Button type="submit" variant="secondary">
          Add City
        </Button>
      </form>
    </div>
  );
};

export default AddCity;
