import {SET_DATA} from "../reducers/data";
import {fetchData} from "../../API/API";

export const getData = (db) => async (dispatch) => {
    const data = await fetchData(db)
    await dispatch(setDataAC(data.data))

}


export const setDataAC = (payload) => ({
    type: SET_DATA,
    payload
})