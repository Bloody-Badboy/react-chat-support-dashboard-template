import * as React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ConversationsLayout from "./pages/ConversationsLayout";
import Conversation from "./pages/Conversation";
import NotFound from "./pages/NotFound";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConversationsLayout />}>
          <Route path="/conversations/:id" element={<Conversation />} />
        </Route>
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}
