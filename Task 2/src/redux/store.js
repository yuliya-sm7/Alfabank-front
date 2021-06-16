import {createStore, applyMiddleware} from "redux";
import {reducer} from "./reducer.ts";
import logger from "redux-logger";

const initState = {
    items: {},
    item: {name: "", price: NaN},
    id: "",
    modalIsOpen: false
};

const persistedState = localStorage.getItem("reduxState")
    ? JSON.parse(localStorage.getItem("reduxState"))
    : initState;
export const store = createStore(reducer, persistedState, applyMiddleware(logger));
