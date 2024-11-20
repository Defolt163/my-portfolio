import '../ModalGetOrder/ModalGetOrder'
export default function ModalSuccess({ onClose }) {
    return (
        <div onClick={onClose} className="modal">
            <div className="modal_wrapper success">
                <h2 className='page-header text-center'>Успешно!</h2>
                <h3 className='page-subheader'>Ваше сообщение было отправлено ✅</h3>
                <div onClick={onClose} className="modal-close"><i className="fa-solid fa-x"></i></div>
            </div>
        </div>
    );
}