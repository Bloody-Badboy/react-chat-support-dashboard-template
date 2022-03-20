import {
  alpha,
  Avatar,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import { Conversation } from "../interfaces/Conversation";
import { stringAvatar } from "../utils";

interface ConversationListProps {
  conversations: Conversation[];
  scrollableTarget: string;
  hasMore: boolean;
  onLoadMore: () => void;
}
export default function ConversationList({
  conversations,
  scrollableTarget,
  hasMore,
  onLoadMore,
}: ConversationListProps) {
  const navigate = useNavigate();
  return (
    <InfiniteScroll
      dataLength={conversations.length}
      next={onLoadMore}
      hasMore={hasMore}
      scrollableTarget={scrollableTarget}
      loader={
        <Box
          sx={{
            py: 2,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      }
    >
      <>
        {conversations.map((conversation, index) => (
          <Box
            key={index}
            onClick={() =>
              navigate(`conversations/${conversation.id}`, { replace: true })
            }
            sx={{
              py: 2,
              px: 2,
              bgcolor: (theme) =>
                conversation.isSelected
                  ? alpha(theme.palette.primary.main, 0.1)
                  : "background.paper",
              "&:hover": {
                bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Avatar {...stringAvatar(conversation.title)} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  px: 2,
                }}
              >
                <Typography variant="subtitle1" noWrap>
                  {conversation.title}
                </Typography>
                <Typography
                  variant="body2"
                  noWrap
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  {conversation.lastMessage}
                </Typography>
              </Box>
              <Typography
                variant="overline"
                sx={{
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                  alignSelf: "flex-start",
                  color: "text.secondary",
                }}
              >
                5 min ago
              </Typography>
            </Box>
          </Box>
        ))}
      </>
    </InfiniteScroll>
  );
}
