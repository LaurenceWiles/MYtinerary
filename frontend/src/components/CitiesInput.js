import { useCallback, useState } from "react";
import { Spinner, Alert } from "react-bootstrap";
import { useDebounce } from "use-debounce";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const CitiesInput = ({ cities, loading, error, onChange }) => {
  const [filter, setFilter] = useState("");
  const [debouncedFilter] = useDebounce(filter, 500);

  const handleChange = useCallback(
    (e) => {
      setFilter(e.target.value);
      onChange(e.target.value);
    },
    [onChange]
  );

  const filteredCities = (cities || [])
    .filter((city) =>
      city.name.toLowerCase().includes(debouncedFilter.toLowerCase())
    )
    .map((city) => city.name);

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
