import Backdrop from '../Backdrop/Backdrop';
import './FullScreenModal.css';
import ReactDOM from 'react-dom';

const FullScreenModal = ({ children}: {
    children: React.ReactNode
}) => {

    document.getElementsByTagName("body")[0].setAttribute("style", "overflow: hidden");
    const targetElement = document.getElementById('modal') as HTMLElement;

    const FullScreenModalJSX =  (
        <Backdrop >
            <div className="full-screen-modal-container">
                <div className="full-screen-modal-x-container">
                </div>
                    {children}
            </div>
        </Backdrop>
    );

    return ReactDOM.createPortal(FullScreenModalJSX, targetElement);
};

export default FullScreenModal;