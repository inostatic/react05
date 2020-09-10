import {SELECTED_ROW, SEND_FORM, SET_DATA, SET_PAGINATION} from "../reducers/data";
import {fetchData} from "../../API/API";

export const getData = (db) => async (dispatch) => {
    const data = await fetchData(db)
    await dispatch(setDataAC(data.data))
    await dispatch(setItemAC())

}


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