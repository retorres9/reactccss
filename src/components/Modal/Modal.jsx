import { useEffect, useState } from "react";

const Modal = (props) => {
    const [animation, setAnimation] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    let timeoutModal;
    useEffect(() => {
        if(props.modalIsVisible === true){
            setModalVisible(true);
            timeoutModal = setTimeout(() => {
                console.log('llega show');
                setAnimation('modal-content-show');
            }, 200)
        }        
        else if (props.modalIsVisible === false) {
            setAnimation('modal-content-hide');
            timeoutModal = setTimeout(() => {
                console.log('llega hide');
                setModalVisible(false);
            }, 200);
        }
        return () => clearTimeout(timeoutModal);
        
    }, [props.modalIsVisible]);
    return(
        <div className={`modal ${modalVisible ? 'modal-show' : ''}`}>
            <div className={`modal-content ${animation}`}>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;