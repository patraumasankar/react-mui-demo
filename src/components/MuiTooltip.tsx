import { Delete } from "@mui/icons-material";
import { IconButton, Stack, Tooltip } from "@mui/material";
import React from "react";

export const MuiTooltip = () => {
  return (
    <Stack spacing={8} direction='row'>
      <Tooltip title="delete" placement="right" arrow>
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
      <Tooltip
        title="delete"
        placement="right"
        arrow
        enterDelay={500}
        leaveDelay={200}
      >
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};
