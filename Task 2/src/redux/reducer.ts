const initState = {
    items: [],
    item: {name: "", price: NaN},
    modalIsOpen: false
};

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case "MODAL":
            return {...state, modalIsOpen: action.payload};
        case "CHANGE_ITEM":
            return {
                ...state,
                item: state.items.filter((el) => el.id === action.id)[0],
                items: state.items.filter((el) => el.id !== action.id),
                modalIsOpen: true
            };
        case "EDIT_ITEM":
            return {...state, item: action.payload};
        case "ADD_TO_ITEMS":
            const it = action.payload;
            it.id = action.id;
            return {...state, items: [...state.items, it], modalIsOpen: false};
        case "REMOVE_ITEM":
            return {...state, items: state.items.filter((el) => el.id !== action.id)};
        default:
            return state;
    }
};
