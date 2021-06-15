import React from "react";
import {connect} from "react-redux";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import {editItem, modal} from "../redux/action";

const Barcode: React.FC<{edit: (name: string) => void; window: (isOpen: boolean) => void}> = ({
    edit,
    window
}) => {
    return (
        <>
            <BarcodeScannerComponent
                width={300}
                height={300}
                onUpdate={(err, result) => {
                    if (result) {
                        window(true);
                        edit(result.getText());
                    }
                }}
            />
        </>
    );
};
const mapDispatchToProps = (dispatch) => ({
    edit: (name) => dispatch(editItem({name: name, price: 0})),
    window: (isOpen) => dispatch(modal(isOpen))
});
export default connect(null, mapDispatchToProps)(Barcode);
