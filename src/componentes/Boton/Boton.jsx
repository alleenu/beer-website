import PropTypes from "prop-types";

function Boton(props){
    const btnStyle = {
        backgroundColor : props.color,
        marginLeft: props.marginLeft,
        marginBottom : props.marginBottom,
        color:' white',
        padding:'10px 0',
        borderRadius: '5px',
        border: '#0ec10b',
        cursor:'pointer',
        width: '40%',
    };

    return(
        <button style={btnStyle}> {props.texto} </button>
    )
}

Boton.PropTypes={
    color: PropTypes.string,
    marginLeft: PropTypes.any,
    marginBottom: PropTypes.any,
    texto: PropTypes.string.isRequired,
}

export default Boton;