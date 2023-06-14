import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./Redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import ErrorBoundary from "./Components/Common/ErrorBoundry";

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </PersistGate>
  </Provider>
);
