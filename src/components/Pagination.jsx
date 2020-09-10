import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {setItemAC} from "../redux/action/data";

export const Pagination = () => {
    const dispatch = useDispatch()
    const countPages = useSelector(({ data }) => data.countPages)
    const pagination = new Array(countPages).fill(1)
    const setPage = (event) => {
        if (event.target.dataset.num) {
            dispatch(setItemAC(event.target.dataset.num))
        }
    }


    return (
        <div className="pagination__container" onClick={setPage}>
            {pagination &&
                pagination.map((el, index) => <div key={index} data-num={index + el}>{index + el}</div>)
            }
        </div>
    )
}