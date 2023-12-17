import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Login from "./pages/Login.tsx";
import RequireAuth from "./components/RequireAuth.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<App />}>
            {/* public routes */}
            <Route path="register" element={<p>Register</p>} />
            <Route path="unauthorized" element={<p>Unauthorized</p>} />

            {/* protected routes */}
            <Route element={<RequireAuth allowedRoles={["admin", "user", "products"]} />}>
              <Route path="home" element={<p>Home</p>} />
            </Route>
            <Route element={<RequireAuth allowedRoles={["admin", "user"]} />}>
              <Route path="users" element={<p>Users</p>} />
            </Route>
            <Route
              element={<RequireAuth allowedRoles={["admin", "products"]} />}
            >
              <Route path="products" element={<p>Products</p>} />
            </Route>

            {/* catch all */}
            <Route path="*" element={<p>404</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
