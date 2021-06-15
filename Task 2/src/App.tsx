import React, {useState} from "react";
import Items from "./components/Items/Items";
import Input from "components/Input/Input";
import Barcode from "components/Barcode";
import Modal from "react-modal";
import {connect} from "react-redux";

const App: React.FC<{modalIsOpen: boolean}> = ({modalIsOpen}) => {
    const [scan, setScan] = useState(false);
    return (
        <div className="App">
            <h1>Список покупок</h1>
            <Input />
            <Items />
            <Modal isOpen={modalIsOpen} ariaHideApp={false}>
                <h3>Редактирование</h3>
                <Input />
            </Modal>
            <div>
                <button onClick={() => setScan(!scan)}>
                    {!scan ? "Сканировать код" : "Закрыть"}
                </button>
            </div>
            {scan ? <Barcode /> : null}
        </div>
    );
};

const mapStateToProps = ({modalIsOpen}) => ({
    modalIsOpen
});

export default connect(mapStateToProps, null)(App);
