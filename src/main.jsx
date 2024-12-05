import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="flex flex-col items-center font-sans ">
      <h1 className="font-semibold text-white text-6xl tracking-tight p-8 drop-shadow-lg">
        EasyCV
      </h1>

      <App />
    </div>
  </StrictMode>
);
