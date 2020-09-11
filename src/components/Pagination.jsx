import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {setItemAC} from "../redux/action/data";

export const Pagination = () => {
    const dispatch = useDispatch()
    const {countPages, currentPage} = useSelector(({ data }) => ({
        countPages: data.countPages,
        currentPage: data.currentPage
    }))

    const pagination = new Array(countPages).fill(1)
    const setPage = (event) => {
        if (event.target.dataset.num) {
            dispatch(setItemAC(event.target.dataset.num))
        }
    }


    return (
        <div className="pagination__container" onClick={setPage}>
            {pagination &&
                pagination.map((e, i) => <div className={currentPage == i + e ? 'selected' : ''} key={i} data-num={i + e}>{i + e}</div>)
            }
        </div>
    )
}