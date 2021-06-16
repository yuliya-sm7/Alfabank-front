const initState = {
    items: {},
    item: {name: "", price: NaN},
    id: "",
    modalIsOpen: false
};

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case "MODAL":
            return {...state, modalIsOpen: action.payload};
        case "CHANGE_ITEM":
            return {
                ...state,
                item: state.items[action.id],
                id: action.id,
                modalIsOpen: true
            };
        case "EDIT_ITEM":
            return {...state, item: action.payload};
        case "ADD_TO_ITEMS":
            const new_list = state.items;
            new_list[action.id] = action.payload;
            return {...state, id: "", items: new_list, modalIsOpen: false};
        case "REMOVE_ITEM":
            const new_items = state.items;
            delete new_items[action.id];
            return {...state, items: new_items};
        default:
            return state;
    }
};
