import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";



createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <AppRoutes />
        <ToastContainer />
    </Provider>

);
