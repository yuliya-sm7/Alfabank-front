import {v4 as uuidv4} from "uuid";

interface Item {
    name: string;
    price: number;
}
export const editItem = (obj: Item) => ({
    type: "EDIT_ITEM",
    payload: obj
});

export const addToItems = (obj: Item) => ({
    type: "ADD_TO_ITEMS",
    id: uuidv4(),
    payload: obj
});

export const removeItem = (id: string) => ({
    type: "REMOVE_ITEM",
    id: id
});
