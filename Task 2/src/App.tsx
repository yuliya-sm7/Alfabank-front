import React from "react";
import Items from "./components/Items/Items";
import Input from "components/Input/Input";
// import Modal from "react-modal";

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Список покупок</h1>
            <Input />
            <Items />
            {/* <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
                <h3>Редактирование</h3>
                <Input item={item}></Input>
            </Modal> */}
        </div>
    );
};
// Modal.setAppElement(App);

export default App;
