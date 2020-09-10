export const SET_DATA = "SET_DATA"
export const SET_PAGINATION = "SET_PAGINATION"
export const SELECTED_ROW = "SELECTED_ROW"
export const SEND_FORM = "SEND_FORM"

let initialState = {
    data: [],
    items: [],
    countItem: 50,
    currentPage : 1,
    countPages: 0,
    selectedRow: null,
    isLoaded: false
}


export const data = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.payload,
                isLoaded: true
            }
        case SET_PAGINATION:
            const currentPage = action.payload || state.currentPage
            const countPages = Math.ceil(state.data.length / state.countItem)
            const items = state.data.slice((currentPage - 1) * state.countItem, currentPage * state.countItem)

            return {
                ...state,
                countPages,
                items
            }
        case SELECTED_ROW:
            const selectedRow = state.items.find((item) => +item.id === +action.payload)
            return {
                ...state,
                selectedRow
            }
        case SEND_FORM:
            const newData = [action.payload, ...state.data]
            const newItems = [action.payload, ...state.items].slice(0, state.countItem)
            return {
                ...state,
                data: newData,
                items: newItems
            }


        default: return state
    }

}