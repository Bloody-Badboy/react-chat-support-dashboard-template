import { useSelector } from "react-redux";
import { ConversationsState } from "../reducers/ConversationsSlice";
import { RootState } from "../reducers/rootReducer";

export const useColorModeSelector = () =>
  useSelector((state: RootState) => state.colorMode);

export const useConversationsSelector = () =>
  useSelector<RootState, ConversationsState>((state) => state.conversations);
