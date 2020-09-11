export const SET_LOADING = "SET_LOADING"
export const SET_DATA = "SET_DATA"
export const SET_PAGINATION = "SET_PAGINATION"
export const SELECTED_ROW = "SELECTED_ROW"
export const SEND_FORM = "SEND_FORM"
export const DATA_SORT = "DATA_SORT"
export const DATA_SEARCH = "DATA_SEARCH"

let initialState = {
    data: [],
    dataReserve: [],
    items: [],
    countItem: 50,
    currentPage: 1,
    countPages: 0,

    selectedRow: null,
    isLoaded: false
}

const sortByKey = (key, data) => {
    return data.sort((prev, next) => {
        if (prev[key] < next[key]) return -1;
        if (prev[key] < next[key]) return 1;
    });
}

const searchByString = (data, str) => {
    return data.filter(elem => {
        return (
            (String(elem.id).toLowerCase().indexOf(str) !== -1)
            || (elem.firstName.toLowerCase().indexOf(str) !== -1)
            || (elem.lastName.toLowerCase().indexOf(str) !== -1)
            || (elem.email.toLowerCase().indexOf(str) !== -1)
            || (elem.phone.toLowerCase().indexOf(str) !== -1)
        )
    })
}

export const data = (state = initialState, action) => {
    let countPages
    let items
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoaded: false
            }

        case SET_DATA:
            return {
                ...state,
                data: action.payload,
                dataReserve: action.payload,
                isLoaded: true
            }
        case SET_PAGINATION:
            const currentPage = action.payload || state.currentPage
            countPages = Math.ceil(state.data.length / state.countItem)
            items = state.data.slice((currentPage - 1) * state.countItem, currentPage * state.countItem)

            return {
                ...state,
                countPages,
                items,
                currentPage
            }
        case SELECTED_ROW:
            const selectedRow = state.items.find((item) => +item.id === +action.payload)
            return {
                ...state,
                selectedRow
            }
        case SEND_FORM:
            const data = [action.payload, ...state.data]
            countPages = Math.ceil(data.length / state.countItem)
            items = data.slice((state.currentPage - 1) * state.countItem, state.currentPage * state.countItem)
            return {
                ...state,
                data,
                dataReserve: [action.payload, ...state.dataReserve],
                items,
                countPages
            }
        case DATA_SORT:
            const key = action.payload.key
            let newData
            action.payload.flag
                ? newData = sortByKey(key, state.data).reverse()
                : newData = sortByKey(key, state.data)

            items = newData.slice((state.currentPage - 1) * state.countItem, state.currentPage * state.countItem)
            return {
                ...state,
                data: newData,
                items
            }
        case DATA_SEARCH:
            if (action.payload === '') {
                items = state.dataReserve.slice(0, 50)
                countPages =  countPages = Math.ceil(state.dataReserve.length / state.countItem)
                return {
                    ...state,
                    items,
                    currentPage: 1,
                    data: state.dataReserve,
                    countPages
                }
            }
            const searchData = searchByString(state.dataReserve, action.payload.toLowerCase())
            items = searchData.slice(0, 50)
            countPages = Math.ceil(searchData.length / state.countItem)
            return {
                ...state,
                data: searchData,
                items,
                currentPage: 1,
                countPages

            }

        default:
            return state
    }

}