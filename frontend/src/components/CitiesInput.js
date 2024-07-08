import { useCallback, useState, useMemo } from "react";
import { Spinner, Alert } from "react-bootstrap";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import useCityData from "../hooks/useCityData";

const CitiesInput = ({ onChange }) => {
  const { list, loading, error } = useCityData();
  const [filter, setFilter] = useState("");

  const handleChange = useCallback(
    (e) => {
      setFilter(e.target.value);
      onChange(e.target.value);
    },
    [onChange]
  );

  const filteredCities = useMemo(() => {
    if (!filter) return list.map((city) => city.name);
    return (list || [])
      .filter(
        (city) =>
          city &&
          city.name &&
          city.name.toLowerCase().startsWith(filter.toLowerCase())
      )
      .map((city) => city.name);
  }, [list, filter]);

  return (
    <div>
      <h2 className="text-center">Find A City</h2>
      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}
      <Autocomplete
        disablePortal
        id="cities-autocomplete"
        options={filteredCities}
        sx={{ width: 300 }}
        onInputChange={(_, value) => handleChange({ target: { value } })}
        renderInput={(params) => (
          <TextField {...params} label="Search cities" />
        )}
      />
    </div>
  );
};

export default CitiesInput;
