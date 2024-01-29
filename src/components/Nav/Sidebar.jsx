import { useState } from 'react';
import '../../assets/dist/css/main.css';


const Sidebar = () => {
    const [minimized, setMinimized]= useState(false);
    
    function sidebarMinHandler() {
        setMinimized(!minimized);
    }
    return (
        <div className={`sidebar ${minimized && 'sidebar_min'}`} id="sidebar">
            <div className="sidebar_info">
                <div className="sidebar_minimize">
                    <button className="btn_mg btn_mg__secondary" id="toggle-sidebar" onClick={sidebarMinHandler}>&lt;</button>
                </div>
                <div className="sidebar_profile">
                    <img src="../dist/images/avatar1.png" alt=""/>
                    <h3>Cosme Fulanito</h3>
                    <hr/>
                    <h4>Asistente de Operaciones 2</h4>
                </div>
            </div>
            <div className="sidebar_menu">
                <div className="sidebar_menu__items">
                    <div className="sidebar_menu__item">
                        <a className="active item__master">Reportes</a>
                        <div className="item_slaves">
                            <a className="item__slave">Reportes</a>
                        </div>
                    </div>
                    <div className="sidebar_menu__item">
                        <a className="item__master">Reportes</a>
                        <div className="item_slaves">
                            <a className="item__slave">
                                Reportes
                            </a>
                            <a className="item__slave">Reportes</a>
                        </div>
                    </div>
                    <div className="sidebar_menu__item">
                        <a className="item__master">Reportes</a>
                        <div className="item_slaves">
                            <a className="item__slave">Reportes</a>
                            <a className="item__slave">Reportes</a>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default Sidebar;