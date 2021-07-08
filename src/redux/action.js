// function return action ---> type: ADD-IMG payload: 

const getInfo = () => { //undefined
    return function (dispatch) {
        return fetch('https://rickandmortyapi.com/api/character/384')
            .then(response => response.json())
            .then(json => {
                dispatch({ type: 'GETINFO', payload: json })
            })
    }
}

export default getInfo;