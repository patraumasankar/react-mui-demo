import { NavigateNext } from "@mui/icons-material";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";

export const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs 
      aria-aria-label="breadcrum"
      separator={<NavigateNext fontSize="small" />}
      maxItems={3}
      itemsBeforeCollapse={2}
      >
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};
