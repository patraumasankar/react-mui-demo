import { Face } from "@mui/icons-material";
import { Avatar, Chip, Stack } from "@mui/material";
import React, { useState } from "react";

export const MuiChip = () => {
  const [chips, setChips] = useState(["chip 1", "chip 2", "chip 3"]);
  const handleDelete = (chip: string) => {
    setChips((chips) => chips.filter((ch) => ch !== chip));
  };
  return (
    <Stack spacing={4} direction="row">
      <Chip color="primary" label="chip" size="small" icon={<Face />} />

      <Chip
        color="secondary"
        label="chip outline"
        size="small"
        variant="outlined"
        avatar={<Avatar>US</Avatar>}
      />

      <Chip
        color="error"
        label="Delete"
        onClick={() => alert("Chip clicked")}
        onDelete={() => alert("Chip delete clicked")}
      />

      {chips.map((chip) => (
        <Chip
          key={chip}
          label={chip}
          color="primary"
          onDelete={() => handleDelete(chip)}
        />
      ))}
    </Stack>
  );
};
