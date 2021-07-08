import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import getInfo from './redux/action.js'
import { Link } from 'react-router-dom';


const Personaje = (props) => {

    useEffect(() => {
        props.getInfo()
    }, [])

    return (
        <div>
            {!props.detallePersonaje[0] ? (
                <h2> LOADING...</h2>
            ) : (
                <div>
                    <h2>{props.detallePersonaje[0].name}</h2>
                    <img src={props.detallePersonaje[0].image}/>
                    <p>{props.detallePersonaje[0].species}</p>
                    <p>{props.detallePersonaje[0].gender}</p>
                    <Link to='/'>
                        <button> Home </button>
                    </Link>
                </div>
            )}
        </div>
    )
}


const mapState = (state) => {
    return {
        detallePersonaje: state
    }
}

const mapDispatch = (dispatch) => {
    return {
        getInfo: () => dispatch(getInfo())
    }
}

export default connect(
    mapState,
    mapDispatch
)(Personaje)

