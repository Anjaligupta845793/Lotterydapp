import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MyProvider } from "./context/index.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <MyProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </MyProvider>
);
