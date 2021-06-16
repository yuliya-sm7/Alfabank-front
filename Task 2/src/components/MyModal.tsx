import React from "react";
import {connect} from "react-redux";
import {modal} from "../redux/action";
import Modal from "react-modal";
import Input from "./Input";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
    }
};

const MyModal: React.FC<{modalIsOpen: boolean; closeModal: () => void}> = ({
    modalIsOpen,
    closeModal
}) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            style={customStyles}
        >
            <h4>Редактирование</h4>
            <Input />
        </Modal>
    );
};

const mapStateToProps = ({modalIsOpen}) => ({
    modalIsOpen
});

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(modal(false))
});

export default connect(mapStateToProps, mapDispatchToProps)(MyModal);
