import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import getInfo from './redux/action.js'
import { Link } from 'react-router-dom';


const Personaje = (props) => {
    const component
    console.log(component)
    useEffect(() => {
        props.getInfo()
        component =
            <div>
                <h2>{props.detallePersonaje[0].name}</h2>
                <img src={props.detallePersonaje[0].image} />
                <h2>{props.detallePersonaje[0].species}</h2>
                <h2>{props.detallePersonaje[0].gender}</h2>
                <Link to='/'>
                    <button>A CASA</button>
                </Link>
            </div>
    }, [])

    return (
        <div>
            {!component ? (
                <h2> LOADING...</h2>
            ) : (
                {component}
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

