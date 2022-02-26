import { Button, Stack, Typography } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", userSelect: "none" }}
    >
      <Typography
        variant="h1"
        align="center"
        sx={{
          color: (theme) => theme.palette.primary["main"],
          fontWeight: "bold",
        }}
      >
        404
      </Typography>
      <Typography
        variant="h4"
        sx={{ textTransform: "uppercase" }}
        align="center"
      >
        Oops! Nothing was found
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ textTransform: "uppercase", mt: 4 }}
        align="center"
      >
        The page you are looking for does not exist or has been moved.
      </Typography>
      <Button component={Link} to="/" variant="text">
        Return to home
      </Button>
    </Stack>
  );
}
