import Feedback from "../Feedback/Feedback";
import './ModalGetOrder.sass'

export default function ModalGetOrder({ onClose }){
    return(
        <div className="modal">
            <div className="modal_wrapper">
                <Feedback/>
                <div onClick={onClose} className="modal-close">x</div>
            </div>
        </div>
    )
}