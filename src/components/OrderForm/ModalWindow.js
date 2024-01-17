import React, { useState, forwardRef, useImperativeHandle } from 'react';
import Modal from 'react-modal';

const modalWindowStyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',

        borderRadius: '25px',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: 'blue',

        backgroundColor: 'whitesmoke',
        boxShadow: '0 8px 12px 0 rgba(0, 0, 0, 0.2), 0 10px 24px 0 rgba(0, 0, 0, 0.19)',

        fontFamily: 'Calibri, sans-serif',
        textAlign: 'center',
        boxAlign: 'center'
    }
};

const modalWindowStyleButton = {
        height: '35px',
        width: '55px',

        borderRadius: '10px',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: 'mediumblue',

        backgroundImage: 'linear-gradient(to bottom right, mediumblue, aqua)',
        color: 'whitesmoke',
        transition: 'transform 0.5s'
};

const ModalWindow = forwardRef((props, ref) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        openModal: () => {
            setModalIsOpen(true);
        }
    }));

    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalWindowStyle}
                contentLabel="Повідомлення"
            >
                <h2>💧 Дякуємо за замовлення 💧</h2>
                <p>Наш оператор зв`яжеться з Вами якнайшвидше 😉</p>
                <button style={modalWindowStyleButton} onClick={closeModal}>OK</button>
            </Modal>
        </div>
    );
});

export default ModalWindow;
