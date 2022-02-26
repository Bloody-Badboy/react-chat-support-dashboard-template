import {
  alpha,
  Box,
  createTheme,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";

const MessageLeft: React.FC = () => {
  return (
    <Box
      sx={{
        py: 2,
        pr: {
          md: 8,
          lg: 16,
        },
      }}
      display="flex"
      justifyContent="flex-start"
      flexDirection="row"
    >
      <Paper
        sx={{
          pl: 2,
          pr: 2,
          pt: 2,
          borderRadius: 4,
          bgcolor: (theme) => alpha(theme.palette.primary["main"], 0.1),
        }}
        elevation={0}
      >
        <Box>
          <Typography variant="body2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            beatae architecto libero voluptates dolores dolor, tenetur cum
            voluptatibus nobis dolorem similique velit officia sunt et corporis
            necessitatibus officiis ullam natus?
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="flex-end"
          flexDirection="row"
          sx={{
            color: "text.secondary",
          }}
        >
          <Typography variant="overline"> 5 min ago</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default MessageLeft;
