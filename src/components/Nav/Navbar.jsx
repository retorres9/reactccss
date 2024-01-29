import { useState } from 'react';
import '../../assets/dist/css/main.css';

const Navbar = (props) => {
    const [displayed, isDisplayed] = useState(false);
    function hoverInMenuHandler(){
        isDisplayed(true);
    }
    function hoverOutMenuHandler(){
        isDisplayed(false);
    }

return (
    <nav className={`${props.isFixed && 'fixed'}`}>
        <div className="info-sistema">
            <img src="../dist/images/coopmego-logo-white.svg" alt="imagen_coopmego"/>
            <h2>|</h2>
            <h2>Soporte</h2>
        </div>
        <div className="actions">
            <div className="profile" onMouseEnter={hoverInMenuHandler} onMouseLeave={hoverOutMenuHandler}>
                <button className="btn_mg btn_mg__secondary" id="profile">Cosme Fulanito</button>
                <div className={`dropdown_mg ${displayed && 'active'}`} id="dropdown_mg">
                    <a href="#">Cambiar contraseña</a>
                    <a href="#">Preguntas de seguridad</a>
                </div>
            </div>
            <button className="btn_mg btn_mg__secondary" id="logout">
                <img src="../dist/images/exit.svg" alt="cerrar sesion"/>
            </button>   
        </div>
    </nav>
);
}

export default Navbar;