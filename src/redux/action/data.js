import {DATA_SORT, SELECTED_ROW, SEND_FORM, SET_DATA, SET_PAGINATION, DATA_SEARCH, SET_LOADING} from "../reducers/data"
import {fetchData} from "../../API/API"

export const getData = (db) => async (dispatch) => {
    try {
        dispatch(setLoaderAC())
        const data = await fetchData(db)
        await dispatch(setDataAC(data.data))
        await dispatch(setItemAC())
    } catch (e) {
        throw new Error(e)
    }
}

export const setLoaderAC = () => ({type: SET_LOADING})

export const setDataAC = (payload) => ({
    type: SET_DATA,
    payload
})

export const setItemAC = (payload) => ({
    type: SET_PAGINATION,
    payload
})

export const selectedItemAC = (payload) => ({
    type: SELECTED_ROW,
    payload
})

export const sendFormAc = (payload) => ({
    type: SEND_FORM,
    payload
})

export const sortByAC = (payload) => ({
    type: DATA_SORT,
    payload
})

export const searchByStrAC = (payload) => ({
    type: DATA_SEARCH,
    payload
})
