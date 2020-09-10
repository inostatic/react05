export const SELECT_DATA = "SELECT_DATA"

let initialState = {
    select: null
}

export const select = (state = initialState, action) => {
    if (action.type === SELECT_DATA) {
        return {
            ...state,
            select: action.payload
        }
    }
    return state
}