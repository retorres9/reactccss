import '../../assets/dist/css/main.css';

const Button = (props) => {
    <button className={`btn_mg ${props.typeBtn}`}>
        {props.text}
    </button>
}

export default Button;