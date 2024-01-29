import { useState } from "react";
import '../../assets/dist/css/main.css'
const Card = (props) => {
    
    return(
        <div className="card card-row">
                {props.children}
        </div>
    );
}

export default Card;