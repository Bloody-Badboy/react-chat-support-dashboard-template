import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import {
  Box,
  CircularProgress,
  Grid,
  IconButton,
  styled,
  Tab,
  Tabs,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import * as React from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { toggleColorMode } from "../app/features/ColorModeSlice";
import { setConversations } from "../app/features/ConversationsSlice";
import { useConversationsSelector } from "../app/selectors";
import { useAppDispatch } from "../app/store";
import ConversationList from "../components/ConversationList";
import { Conversation } from "../interfaces/Conversation";

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const _conversations: Conversation[] = [];

for (let i = 0; i < 50; i++) {
  const resolved = i % 2 === 0;
  _conversations.push({
    id: "conv_" + String(i).padStart(4, "0"),
    title: `Conversation ${i}`,
    sender: "Sender " + i,
    isResolved: resolved,
    lastMessage:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    isSelected: false,
  });
}

const ConversationsLayout: React.FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const {
    isLoaded,
    resolvedConversations,
    unResolvedConversations,
    allConversations,
  } = useConversationsSelector();

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(setConversations(_conversations));
    }, 3000);
  }, []);

  if (!isLoaded) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <RootStyle>
      <Grid container>
        <Grid item xs={4} lg={3}>
          <Box
            sx={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              backgroundColor: (theme) =>
                theme.palette.mode === "light" ? "#fff" : "#2a2b2e",
              borderRight: (theme) => `1px solid ${theme.palette.divider}`,
            }}
          >
            <Box
              sx={{
                width: "100%",
                borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
              }}
            >
              <Box
                sx={{
                  height: "64px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 2,
                }}
              >
                <Typography variant="h6">Web Chat</Typography>
                <Tooltip
                  title={`Toggle ${
                    theme.palette.mode === "dark" ? "light" : "dark"
                  } mode`}
                >
                  <IconButton
                    sx={{ ml: 1 }}
                    onClick={() => dispatch(toggleColorMode())}
                    color="inherit"
                  >
                    {theme.palette.mode === "dark" ? (
                      <Brightness7Icon />
                    ) : (
                      <Brightness4Icon />
                    )}
                  </IconButton>
                </Tooltip>
              </Box>
              <Tabs value={value} onChange={handleChange} variant="fullWidth">
                <Tab label="Unresolved" />
                <Tab label="Resolved" />
                <Tab label="All" />
              </Tabs>
            </Box>
            <Box
              hidden={value !== 0}
              sx={{
                overflowX: "hidden",
                overflowY: "auto",
              }}
            >
              <ConversationList conversations={unResolvedConversations} />
            </Box>
            <Box
              hidden={value !== 1}
              sx={{
                overflowX: "hidden",
                overflowY: "auto",
              }}
            >
              <ConversationList conversations={resolvedConversations} />
            </Box>
            <Box
              hidden={value !== 2}
              sx={{
                overflowX: "hidden",
                overflowY: "auto",
              }}
            >
              <ConversationList conversations={allConversations} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs>
          <Outlet />
        </Grid>
      </Grid>
    </RootStyle>
  );
};
export default ConversationsLayout;
