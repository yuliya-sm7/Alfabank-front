import React from "react";
import {connect} from "react-redux";
import {editItem, addToItems} from "../redux/action";

interface Item {
    name: string;
    price: number;
}

const Input: React.FC<{
    item: Item;
    id: string;
    edit: (item: Item) => void;
    add: (item: Item, id: string) => void;
}> = ({item, id, edit, add}) => {
    const handleChange = (e) => {
        if (e.target.name == "name") {
            edit({name: e.target.value, price: item.price});
        } else if (e.target.name == "price") {
            edit({name: item.name, price: e.target.value});
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!item.name || !item.price || !Number(item.price)) {
            alert("Error!");
        } else {
            add(item, id);
        }
        edit({name: "", price: NaN});
    };

    return (
        <form className="form-row" onSubmit={handleSubmit}>
            <input
                className="form-control col-7"
                name="name"
                type="text"
                value={item.name}
                placeholder="Product"
                onChange={handleChange}
            />
            <input
                className="form-control col-3"
                name="price"
                type="number"
                value={item.price}
                placeholder="Price"
                onChange={handleChange}
            />
            <button type="submit" className="btn btn-info col-2">
                Добавить
            </button>
        </form>
    );
};

const mapDispatchToProps = (dispatch) => ({
    edit: (obj) => dispatch(editItem(obj)),
    add: (obj, id) => dispatch(addToItems(obj, id))
});
const mapStateToProps = ({item, id}) => ({
    item,
    id
});
export default connect(mapStateToProps, mapDispatchToProps)(Input);
