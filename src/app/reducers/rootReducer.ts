import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ColorModeSlice from "./ColorModeSlice";
import ConversationsSlice from "./ConversationsSlice";

const persistConfig = {
  key: "color-mode",
  storage,
};

const rootReducer = combineReducers({
  colorMode: persistReducer(persistConfig, ColorModeSlice),
  conversations: ConversationsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
