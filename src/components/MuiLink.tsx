import { Link, Stack, Typography } from "@mui/material";
import React from "react";

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row">
      <Link href="#">Link</Link>
      <Link href="#" color="secondary">
        Secondary
      </Link>
      <Link href="#" color="secondary" underline="hover">
        hover
      </Link>
      <Typography variant="h6">
        <Link href="#">Link</Link>
      </Typography>
    </Stack>
  );
};
