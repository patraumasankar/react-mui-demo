import React, { useState } from "react";
import { Stack, Rating } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null);
  console.log(value);
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  return (
    <Stack>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
      />
      <Rating value={3} readOnly />
      <Rating value={3} highlightSelectedOnly />
      <Rating
        value={3}
        icon={<FavoriteIcon color="error" fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </Stack>
  );
};
