/**
 * This file contains the reducer function for the context API
 */
const reducer = ( state, action) => {
    switch (action.type) {
        case 'OPEN_POPUP':
            return {...state, isPopupOpen: true};

        case 'CLOSE_POPUP':
            return {...state, isPopupOpen: false};
    
        default:
            throw new Error('Action doe not match!')
    }
}

export default reducer;