import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import SendIcon from "@mui/icons-material/Send";
import {
  Avatar,
  Fab,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setSelected } from "../app/reducers/ConversationsSlice";
import { useConversationsSelector } from "../app/selectors";
import { useAppDispatch } from "../app/store";
import MessageLeft from "../components/MessageLeft";
import MessageRight from "../components/MessageRight";

const APPBAR_HEIGHT = 64;

export default function Conversation() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();
  const { allConversations } = useConversationsSelector();

  useLayoutEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    if (id) {
      const conv = allConversations.find((c) => c.id === id);
      if (conv) {
        setTitle(conv.title);
      }
      dispatch(setSelected(id));
    }
  }, [window.location.pathname]);

  return (
    <Box>
      <Box
        sx={{
          height: `${APPBAR_HEIGHT}px`,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          px: 2,
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Grid container>
        <Grid item xs>
          <Box
            sx={{
              height: `calc(100vh - ${APPBAR_HEIGHT}px)`,
              display: "flex",
              flexDirection: "column",
              borderRight: (theme) => `1px solid ${theme.palette.divider}`,
            }}
          >
            <Stack
              sx={{
                px: 4,
                overflowX: "hidden",
                overflowY: "auto",
              }}
            >
              <MessageLeft />
              <MessageRight />
              <MessageLeft />
              <MessageRight />
              <MessageRight />
              <MessageLeft />
              <MessageRight />
              <MessageLeft />
              <MessageRight />
              <MessageRight />
              <MessageLeft />
              <MessageRight />
              <MessageLeft />
            </Stack>
            <Box
              sx={{
                mx: 4,
                mb: 2,
                mt: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  py: 1,
                  px: 2,
                  flex: 1,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  bgcolor: "background.paper",
                  borderRadius: 8,
                  boxShadow: "rgba(0, 0, 0, 0.2) 0px 6px 24px 0px",
                }}
              >
                <InputBase
                  maxRows={4}
                  placeholder="Type in your messages..."
                  multiline
                  fullWidth
                />
                <IconButton size="medium">
                  <CameraAltOutlinedIcon
                    sx={{
                      color: "text.secondary",
                    }}
                  />
                </IconButton>
                <IconButton size="medium">
                  <ImageOutlinedIcon
                    sx={{
                      color: "text.secondary",
                    }}
                  />
                </IconButton>
              </Box>

              <Fab
                color="primary"
                size="medium"
                sx={{
                  ml: 2,
                  boxShadow: "rgba(0, 0, 0, 0.2) 0px 6px 24px 0px",
                }}
              >
                <SendIcon />
              </Fab>
            </Box>
          </Box>
        </Grid>
        <Grid item md={5} lg={3}>
          <Box>
            <Paper sx={{ m: 2 }} variant="outlined">
              <Stack p={2} justifyContent="center" alignItems="center">
                <Avatar
                  sx={{
                    width: 56,
                    height: 56,
                    mb: 2,
                  }}
                >
                  JD
                </Avatar>
                <Typography variant="h4">Jhon Doe</Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  email@example.com
                </Typography>
              </Stack>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
