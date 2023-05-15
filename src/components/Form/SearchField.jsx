import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
// Material
import { IconButton, InputAdornment, TextField } from "@mui/material";

export default function SearchField() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleFieldOnChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearch = () => {
    if (searchTerm.length > 0) navigate(`/search/${searchTerm}`);

  };

  return (
    <TextField
      value={searchTerm}
      onKeyDown={(ev) => {
        if (ev.key === "Enter") {
          ev.preventDefault();
          handleSearch();
        }
      }}
      onChange={handleFieldOnChange}
      fullWidth
      inputProps={{
        style: { boxSizing: "border-box" },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton disabled={searchTerm.length < 1} onClick={handleSearch}>
              <Search />
            </IconButton>
          </InputAdornment>
        ),
      }}
      variant="outlined"
      placeholder="Search"
    />
  );
}
