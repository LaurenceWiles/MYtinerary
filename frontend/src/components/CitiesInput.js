import { useCallback, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgress, Alert, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import useCityData from "../hooks/useCityData";

const CitiesInput = ({ onChange }) => {
  const { list, loading, error } = useCityData();
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  const handleChange = useCallback(
    (e) => {
      setFilter(e.target.value);
      onChange(e.target.value);
    },
    [onChange]
  );

  const handleSelect = useCallback(
    (event, value) => {
      if (value) {
        navigate(`/itineraries/${encodeURIComponent(value)}`);
      }
    },
    [navigate]
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

      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Box sx={{ my: 2 }}>
          <Alert severity="error">{error}</Alert>
        </Box>
      )}

      <Autocomplete
        disablePortal
        id="cities-autocomplete"
        options={filteredCities}
        sx={{ width: 300 }}
        onInputChange={(_, value) => handleChange({ target: { value } })}
        onChange={handleSelect}
        renderInput={(params) => (
          <TextField {...params} label="Search cities" />
        )}
      />
    </div>
  );
};

export default CitiesInput;
