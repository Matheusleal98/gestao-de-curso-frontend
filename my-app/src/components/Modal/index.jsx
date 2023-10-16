import './style.css'
export const Modal = ({ isOpen, children }) => {

    if (!isOpen) return null;

    return (
        <div className="container-modal">
            <div className='modal-body'>{ children }</div>
        </div>
    );
}