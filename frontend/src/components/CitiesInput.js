import { useCallback, useState, useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner, Alert } from "react-bootstrap";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { fetchCities } from "../redux/citiesSlice";

const CitiesInput = ({ onChange }) => {
  const dispatch = useDispatch();
  const { list: cities, loading, error } = useSelector((state) => state.cities);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  const handleChange = useCallback(
    (e) => {
      setFilter(e.target.value);
      onChange(e.target.value);
    },
    [onChange]
  );

  const filteredCities = useMemo(() => {
    if (!filter) return cities.map((city) => city.name);
    return (cities || [])
      .filter(
        (city) =>
          city &&
          city.name &&
          city.name.toLowerCase().startsWith(filter.toLowerCase())
      )
      .map((city) => city.name);
  }, [cities, filter]);

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
