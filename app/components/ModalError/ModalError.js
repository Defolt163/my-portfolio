import '../ModalGetOrder/ModalGetOrder'
export default function ModalError({ onClose }) {
    return (
        <div onClick={onClose} className="modal">
            <div className="modal_wrapper success">
                <h2 className='page-header text-center'>Ошибка!</h2>
                <h3 className='page-subheader'>Похоже, на неполадки с сервером ❌</h3>
            </div>
        </div>
    );
}