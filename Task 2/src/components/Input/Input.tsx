import React from "react";
import {connect} from "react-redux";
import {editItem, addToItems} from "../../redux/action";
interface Item {
    name: string;
    price: number;
}

const Input: React.FC<{
    item: Item;
    edit: (item: Item) => void;
    add: (item: Item) => void;
}> = ({item, edit, add}) => {
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
            add(item);
        }
        edit({name: "", price: NaN});
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                type="text"
                value={item.name}
                placeholder="Product"
                onChange={handleChange}
            />
            <input
                name="price"
                type="number"
                value={item.price}
                placeholder="Price"
                onChange={handleChange}
            />
            <button type="submit">Добавить</button>
            <br></br>
            <br></br>
        </form>
    );
};

const mapDispatchToProps = (dispatch) => ({
    edit: (obj) => dispatch(editItem(obj)),
    add: (obj) => dispatch(addToItems(obj))
});
const mapStateToProps = ({item}) => ({
    item
});
export default connect(mapStateToProps, mapDispatchToProps)(Input);
