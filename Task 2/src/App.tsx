import React, {useState} from "react";
import Items from "./components/Items";
import Input from "components/Input";
import Barcode from "components/Barcode";
import Modal from "react-modal";
import {connect} from "react-redux";

const App: React.FC<{modalIsOpen: boolean}> = ({modalIsOpen}) => {
    const [scan, setScan] = useState(false);
    return (
        <div className="App">
            <nav className="navbar navbar-light bg-info text-white">
                <h2>Список покупок</h2>
            </nav>
            <div className="container m-3">
                <div className="row mb-3">
                    <div className="col-8">
                        <Input />
                    </div>
                    <div className="col">
                        <button
                            className="d-inline-block btn btn-secondary"
                            onClick={() => setScan(!scan)}
                        >
                            {!scan ? "Сканировать код" : "Закрыть"}
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <Items />
                    </div>
                    <div className="col"> {scan ? <Barcode /> : null}</div>
                </div>
            </div>
            <Modal isOpen={modalIsOpen} ariaHideApp={false}>
                <h3>Редактирование</h3>
                <Input />
            </Modal>
        </div>
    );
};

const mapStateToProps = ({modalIsOpen}) => ({
    modalIsOpen
});

export default connect(mapStateToProps, null)(App);
