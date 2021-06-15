const initState = {
    items: [],
    item: {name: "", price: 1}
};

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case "EDIT_ITEM":
            return {...state, item: action.payload};
        case "ADD_TO_ITEMS":
            const it = action.payload;
            it.id = action.id;
            console.log(it);
            return {...state, items: [...state.items, it]};
        case "REMOVE_ITEM":
            return {...state, items: state.items.filter((el) => el.id !== action.id)};
        default:
            return state;
    }
};
