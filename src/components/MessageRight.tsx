import { Box, Paper, Typography } from "@mui/material";
import { alpha } from "@mui/system";
import React from "react";

const MessageRight: React.FC = () => {
  return (
    <Box
      sx={{
        py: 2,
        pl: {
          md: 8,
          lg: 16,
        },
      }}
      display="flex"
      justifyContent="flex-end"
      flexDirection="row"
    >
      <Paper
        sx={{
          pl: 2,
          pr: 2,
          pt: 2,
          borderRadius: 4,
          bgcolor: "primary.main",
        }}
        elevation={0}
      >
        <Box>
          <Typography
            variant="body2"
            sx={{
              color: "#fff",
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="flex-end"
          flexDirection="row"
          sx={{
            color: alpha("#fff", 0.7),
          }}
        >
          <Typography variant="overline"> 5 min ago</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default MessageRight;
