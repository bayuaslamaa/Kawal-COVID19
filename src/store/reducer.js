import { SET_CASES, SET_INDO } from './action'

const initialState = {
    cases: [],
    caseIndo: []
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case SET_CASES:
            return { ...state, cases: payload }
        case SET_INDO:
            return { ...state, caseIndo: payload }
        default:
            return state
    }
}