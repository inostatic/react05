export const SET_DATA = "SET_DATA"

let initialState = {
    data: [],
    isLoaded: false
}

export const data = (state = initialState, action) => {
    if (action.type === SET_DATA) {
        return {
            ...state,
            data: action.payload,
            isLoaded: true
        }
    }
    return state
}