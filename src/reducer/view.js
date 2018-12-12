import {
    CLICK_HAMBURGER
} from '../actions/actionTypes'

const initialState = {
    toggleHamburger: false
}

function hompage(state = initialState, action) {
    switch (action.type) {
        case CLICK_HAMBURGER:
            return Object.assign({}, state, {
                toggleHamburger: !state.toggleHamburger
            })
        default:
            return state
    }
}

export default hompage