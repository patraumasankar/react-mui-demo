import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormHelperText,
  RadioGroup,
  Radio,
} from "@mui/material";
export const MuiRadioButton = () => {
  const [value, setValue] = useState("");
  console.log(value);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Years of Experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel control={<Radio  size="medium" color="secondary"/>} value="0-2" label="0-2" />
          <FormControlLabel control={<Radio />} value="3-5" label="3-5" />
          <FormControlLabel control={<Radio />} value="6-10" label="6-10" />
        </RadioGroup>
        <FormHelperText>
            Select your experience
        </FormHelperText>
      </FormControl>
    </Box>
  );
};
