const initialState = [];

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GETINFO': {
            return state.concat(action.payload)
        }
        default:
            return state
    }
}

export default rootReducer;

// function return action ---> type: ADD-IMG payload: 