import { useSelector } from "react-redux";
import { ConversationsState } from "../features/ConversationsSlice";
import { RootState } from "../store";

export const useColorModeSelector = () =>
  useSelector((state: RootState) => state.colorMode);

export const useConversationsSelector = () =>
  useSelector<RootState, ConversationsState>((state) => state.conversations);
