import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import rootReducer from "./reducers/rootReducer";

const REDUX_PERSIST_IGNORE_ACTIONS = [
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [...REDUX_PERSIST_IGNORE_ACTIONS],
      },
    }),
});

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./reducers/rootReducer", () => {
    const newRootReducer = require("./reducers/rootReducer").default;
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const persistor = persistStore(store);
export default store;
