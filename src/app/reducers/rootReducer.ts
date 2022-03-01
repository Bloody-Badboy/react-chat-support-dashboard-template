import { combineReducers } from "@reduxjs/toolkit";
import { PersistConfig, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ColorModeSlice from "./ColorModeSlice";
import ConversationsSlice from "./ConversationsSlice";

const rootReducer = combineReducers({
  colorMode: ColorModeSlice,
  conversations: ConversationsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig: PersistConfig<RootState> = {
  key: "root",
  storage,
  whitelist: ["colorMode"],
  debug: true,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
