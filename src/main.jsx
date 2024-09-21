import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ImageFileProvider from "./context/ImageFileProvider";
import { QueryClientProvider, QueryClient } from "react-query";

const client = new QueryClient();

createRoot(document.getElementById("root")).render(
  <ImageFileProvider>
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </ImageFileProvider>
);
