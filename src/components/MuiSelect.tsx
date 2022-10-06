import { Box, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";

export const MuiSelect = () => {
    const [country, setCountry] = useState("");
    const [countries, setCountries] = useState<string[]>([]);
    console.log(country);
    console.log(countries);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string);
  };
  const handleChangeOne = (event: React.ChangeEvent<HTMLInputElement>) => {
    const country = event.target.value
    setCountries(typeof country === "string" ? country.split(',') : country);
  };
  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>

      <TextField
        label="Select Country"
        select
        value={countries}
        onChange={handleChangeOne}
        fullWidth
        SelectProps={{
            multiple: true
        }}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};
