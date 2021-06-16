import React, {useState} from "react";
import Items from "./components/Items";
import Input from "components/Input";
import Barcode from "components/Barcode";
import MyModal from "components/MyModal";

const App: React.FC = () => {
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
                    <div className="col-4">
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
                    <div className="col-4"> {scan ? <Barcode /> : null}</div>
                </div>
            </div>
            <MyModal />
        </div>
    );
};

export default App;
