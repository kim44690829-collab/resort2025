import { useState } from "react";
import { createContext } from "react";
import './Modal.css';

export const ModalContext = createContext();

export default function Modal({children}){
    //모달창 상태
    const[isOpen, setIsOpen] = useState(false);
    //모달 컨텐츠
    const[modalContent, setModalContent] = useState(``);

    //모달 토글
    const toggle = () =>{
        setIsOpen(!isOpen);
    }

    return(
        <ModalContext.Provider value={{toggle,setModalContent}}>
            {children}

            {isOpen &&
                <div className='modalOverlay' onClick={toggle}>
                    {/* 부모로 부터 이벤트 전파 막기 */}
                    <div className="modalWrap" onClick={e => e.stopPropagation()}>
                        <button className='closeBtn' onClick={toggle}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                        {modalContent}            
                    </div>
                </div>
            }
        </ModalContext.Provider>
    )
}