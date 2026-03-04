import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Survey from "./pages/Survey";
import Error from "./pages/Error";
import Login from "./pages/Login";
import ProtectedRoute from "./features/Routes/ProtectedRoutes";
import AuthProvider from "./features/Context/AuthProvider";
import Result from "./pages/Result";
import Freelances from "./pages/Freelance";
import { ThemeProvider } from "./features/Context/ThemProvider";
import AnswerProvider from "./features/Context/AnswerProvider";
import QueryProvider from "./features/Query/QueryProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AnswerProvider>
        <ThemeProvider>
          <AuthProvider>
            <QueryProvider>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/questions" element={<Survey />} />
                  <Route
                    path="/questions/:questionNumber"
                    element={<Survey />}
                  />
                  <Route path="/result" element={<Result />} />
                  <Route path="/freelances" element={<Freelances />} />
                  <Route path="*" element={<Error />} />
                </Route>
              </Routes>
            </QueryProvider>
          </AuthProvider>
        </ThemeProvider>
      </AnswerProvider>
    </Router>
  </React.StrictMode>,
);
