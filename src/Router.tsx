import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PrivateRoute } from "./routes/PrivateRoute";
import { MainRoute } from "./routes/MainRoute";
import { JoinPage } from "./pages/auth/JoinPage";
import { PublicRoute } from "./routes/PublicRoute";
import { LoginPage } from "./pages/auth/LoginPage";
import { TodoPage } from "./pages/todo/TodoPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainRoute />} />
        <Route element={<PublicRoute />}>
          <Route path="/auth/join" element={<JoinPage />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/auth/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/todo" element={<TodoPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
