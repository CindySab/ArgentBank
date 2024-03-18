// Entry point of the application, where the main App component is rendered into the DOM using ReactDOM.createRoot.
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./components/Redux/store.jsx";
import App from "./App.jsx";
import "../src/index.scss";

// Rendering the main App component into the DOM
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
