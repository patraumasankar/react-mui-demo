import { Avatar, AvatarGroup, Stack } from "@mui/material";
import React from "react";

export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <Avatar
          sx={{
            backgroundColor: "primary.main",
          }}
        >
          US
        </Avatar>
        <Avatar
          sx={{
            backgroundColor: "primary.main",
          }}
        >
          SP
        </Avatar>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Avatar
          sx={{
            backgroundColor: "primary.main",
            width: 48,
            height: 48,
          }}
          variant="square"
        >
          US
        </Avatar>
        <Avatar
          sx={{
            backgroundColor: "primary.main",
            width: 48,
            height: 48,
          }}
          variant="square"
        >
          SP
        </Avatar>

        <Avatar
          src="https://randomuser.me/api/portraits/women/79.jpg"
          alt="Jane Doe"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/men/52.jpg"
          alt="Jane Doe"
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <AvatarGroup max={2}>
          <Avatar
            sx={{
              backgroundColor: "primary.main",
            }}
          >
            US
          </Avatar>
          <Avatar
            sx={{
              backgroundColor: "primary.main",
            }}
          >
            SP
          </Avatar>

          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jane Doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/52.jpg"
            alt="Jane Doe"
          />
        </AvatarGroup>
      </Stack>
    </Stack>
  );
};
