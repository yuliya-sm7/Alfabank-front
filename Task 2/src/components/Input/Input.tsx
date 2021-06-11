import React from "react";
interface Item {
    name: string;
    price: number;
    id: string;
}

const Input: React.FC<{
    item: Item;
    handleSubmit: (event) => void;
    setItem: (item: Item) => void;
}> = ({item, handleSubmit, setItem}) => {
    const handleChange = (e) => {
        if (e.target.name == "name") {
            setItem({id: item.id, name: e.target.value, price: item.price});
        } else if (e.target.name == "price") {
            setItem({id: item.id, name: item.name, price: e.target.value});
        }
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

export default Input;
