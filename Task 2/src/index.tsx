import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import {Provider} from "react-redux";
import {store} from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";

store.subscribe(() => {
    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);
