'use client'
import { useState } from 'react';
import './ModalGetOrder.sass'
import Feedback from '../Feedback/Feedback';
import ModalSuccess from '../ModalSuccess/ModalSuccess';
import ModalError from '../ModalError/ModalError';

export default function ModalGetOrder({ onClose }){
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false); 

    const closeNewModal = () => {
        setShowSuccessModal(false);
        setShowErrorModal(false);
        onClose(); // Закрыть основное модальное окно после закрытия нового
    };

    return (
        <>
            {showSuccessModal ? (
                <ModalSuccess onClose={closeNewModal} />
            ) : showErrorModal ? (
                <ModalError onClose={closeNewModal} />
            ) : (
                <div className="modal">
                    <div className="modal_wrapper">
                        <Feedback onError={() => {setShowErrorModal(true)}}
                                onSuccess={() => setShowSuccessModal(true)} />
                        <div onClick={onClose} className="modal-close">x</div>
                    </div>
                </div>
            )}
        </>
    );

}