import axios from 'axios'

export const SET_CASES = 'SET_CASES'
export const SET_INDO = 'SET_INDO'

export const setCases = (data) => {
    return { type: SET_CASES, payload: data }
}

export const setIndo = (data) => {
    return { type: SET_INDO, payload: data }
}


function fetchCases() {
    return axios.get('https://api.kawalcorona.com/')
}

function fetchIndo() {
    return axios.get('https://api.kawalcorona.com/indonesia')
}

export const getCases = () => {
    return dispatch => {
        fetchCases()
            .then(({ data }) => dispatch(setCases(data)))
            .catch(console.log)
    }
}

export const getIndo = () => {
    return dispatch => {
        fetchIndo()
            .then(({ data }) => dispatch(setIndo(data)))
            .catch(console.log)
    }
}