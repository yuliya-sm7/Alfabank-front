export const reducer = (state, action) => {
    switch (action.type) {
        case "MODAL":
            return {...state, modalIsOpen: action.payload};
        case "SORT":
            const new_order = Object.keys(state.items);
            if (action.increase) {
                new_order.sort((a, b) =>
                    state.items[a][action.field] > state.items[b][action.field] ? 1 : -1
                );
            } else
                new_order.sort((a, b) =>
                    state.items[a][action.field] < state.items[b][action.field] ? 1 : -1
                );
            const new_l = {};
            new_order.forEach((el) => {
                new_l[el] = state.items[el];
            });
            return {...state, items: new_l};
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
