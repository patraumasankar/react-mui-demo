import React, { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";

const skills = ["html", "css", "js", "jsx", "tsx"];
export const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  console.log(value);
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        freeSolo
      />
    </Stack>
  );
};
