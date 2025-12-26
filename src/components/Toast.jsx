import "./Toast.css";
import {
    AiOutlineCheckCircle,
    AiOutlineCloseCircle,
    AiOutlineInfoCircle,
    AiOutlineWarning,
    AiOutlineMessage,
} from "react-icons/ai";

const icons = {
    success: <AiOutlineCheckCircle />,
    error: <AiOutlineCloseCircle />,
    info: <AiOutlineInfoCircle />,
    warning: <AiOutlineWarning />,
    message: <AiOutlineMessage />,
};

function Toast({ type = "message", message, onClose = () => {} }) {
    return (
        <div className={`toast toast-${type}`}>
            <span className="toast-icon">{icons[type]}</span>
            <span className="toast-message">{message}</span>
            <span className="toast-close-button" onClick={onClose}>
                <AiOutlineCloseCircle />
            </span>
        </div>
    );
}

export default Toast;
