import React from "react"
import PropTypes from "prop-types";

export const Pagination = ({currentPage, countPages, changeCurrentPage}) => {

    const pagination = new Array(countPages).fill(1)

    const setPage = (event) => {
        if (event.target.dataset.num) {
            changeCurrentPage(event.target.dataset.num)
        } else if (event.target.dataset.left && currentPage > 1) {
            changeCurrentPage(+currentPage - 1)
        } else if (event.target.dataset.right && currentPage < countPages) {
            changeCurrentPage(+currentPage + 1)
        }
    }


    return (
        <div className="pagination__container" onClick={setPage}>
            <div data-left={true}>«</div>
            {
                pagination.map((e, i) => <div className={+currentPage === +(i + e) ? 'selected' : ''} key={i}
                                              data-num={i + e}>{i + e}</div>)
            }
            <div data-right={true}>»</div>
        </div>
    )
}

Pagination.propTypes = {
    currentPage: PropTypes.number,
    countPages: PropTypes.number,
    changeCurrentPage: PropTypes.func.isRequired
}