import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Conversation } from "../../interfaces/Conversation";

export interface ConversationsState {
  isLoaded: Boolean;
  allConversations: Conversation[];
  resolvedConversations: Conversation[];
  unResolvedConversations: Conversation[];
}

const initialState: ConversationsState = {
  isLoaded: false,
  allConversations: [],
  resolvedConversations: [],
  unResolvedConversations: [],
};

const ConversationsSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {
    setConversations: (state, action: PayloadAction<Conversation[]>) => {
      const conversations = action.payload;
      state.allConversations = conversations;
      state.resolvedConversations = conversations.filter(
        (conversation) => conversation.isResolved
      );
      state.unResolvedConversations = conversations.filter(
        (conversation) => !conversation.isResolved
      );
      if (!state.isLoaded) {
        state.isLoaded = true;
      }
    },
    setSelected: (state, action: PayloadAction<string>) => {
      const conversations = state.allConversations.map((conversation) => {
        if (conversation.id === action.payload) {
          conversation.isSelected = true;
        } else {
          conversation.isSelected = false;
        }
        return conversation;
      });
      state.allConversations = conversations;
      state.resolvedConversations = conversations.filter(
        (conversation) => conversation.isResolved
      );
      state.unResolvedConversations = conversations.filter(
        (conversation) => !conversation.isResolved
      );
    },
  },
});
export const { setConversations, setSelected } = ConversationsSlice.actions;
export default ConversationsSlice.reducer;
