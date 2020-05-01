import { SET_CASES } from './action'

const initialState = {
    cases: []
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case SET_CASES:
            return { ...state, cases: payload }
        default:
            return state
    }
}