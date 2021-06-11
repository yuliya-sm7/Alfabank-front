import React, {useState} from "react";
import Items from "./components/Items/Items";
import Input from "components/Input/Input";
import Modal from "react-modal";
import {v4 as uuidv4} from "uuid";

const App: React.FC = () => {
    const [item, setItem] = useState({id: uuidv4(), name: "", price: 0});
    const [list, setList] = useState([]);
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!item.name || !item.price || !Number(item.price)) {
            alert("Error!");
        } else {
            const tmp = list.filter((el) => {
                return el.id != item.id;
            });
            setList([...tmp, item]);
        }
        setItem({id: uuidv4(), name: "", price: 0});
        setIsOpen(false);
    };

    const handleEdit = (edit_id) => {
        setItem(
            list.find((elem) => {
                return elem.id == edit_id;
            })
        );
        console.log(edit_id, "edit");
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="App">
            <h1>Список покупок</h1>
            <Input item={item} handleSubmit={handleSubmit} setItem={setItem}></Input>
            <div>
                <Items list={list} setList={setList} edit={handleEdit} />
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
                <h3>Редактирование</h3>
                <Input item={item} handleSubmit={handleSubmit} setItem={setItem}></Input>
            </Modal>
        </div>
    );
};

// Modal.setAppElement(App);

export default App;
