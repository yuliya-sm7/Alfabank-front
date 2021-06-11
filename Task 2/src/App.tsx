import React, {useState} from "react";
import Items from "./components/Items/Items";
import {v4 as uuidv4} from "uuid";

const App: React.FC = () => {
    const [item, setItem] = useState({name: "", price: ""});
    const [list, setList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!item.name || !item.price) {
            alert("Error!");
        } else {
            const newItem = {
                id: uuidv4(),
                name: item.name,
                price: item.price
            };
            setList([...list, newItem]);
        }
        setItem({name: "", price: ""});
    };

    const handleChange = (e) => {
        if (e.target.name == "name") {
            setItem({name: e.target.value, price: item.price});
        } else if (e.target.name == "price") {
            setItem({name: item.name, price: e.target.value});
        }
    };

    return (
        <div className="App">
            <h1>Список покупок</h1>
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
            <div>
                <Items list={list} setList={setList} />
            </div>
        </div>
    );
};

export default App;
