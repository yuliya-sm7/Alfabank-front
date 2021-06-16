import {v4 as uuidv4} from "uuid";

interface Item {
    name: string;
    price: number;
}
export const editItem = (obj: Item) => ({
    type: "EDIT_ITEM",
    payload: obj
});

export const sorting = (field: string, increase: boolean) => ({
    type: "SORT",
    field: field,
    increase: increase
});

export const addToItems = (obj: Item, id: string) => ({
    type: "ADD_TO_ITEMS",
    id: id ? id : uuidv4(),
    payload: obj
});

export const removeItem = (id: string) => ({
    type: "REMOVE_ITEM",
    id: id
});

export const changeItem = (id: string) => ({
    type: "CHANGE_ITEM",
    id: id
});

export const modal = (isOpen: boolean) => ({
    type: "MODAL",
    payload: isOpen
});
