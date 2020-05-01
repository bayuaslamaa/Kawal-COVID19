import axios from 'axios'

export const SET_CASES = 'SET_CASES'

export const setCases = (data) => {
    return { type: SET_CASES, payload: data }
}

function fetchCases() {
    return axios.get('https://api.kawalcorona.com/')
}

export const getCases = () => {
    return dispatch => {
        fetchCases()
            .then(({ data }) => dispatch(setCases(data)))
            .catch(console.log)
    }
}