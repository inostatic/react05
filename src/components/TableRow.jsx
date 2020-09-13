import React from "react"
import PropTypes from "prop-types"


export const TableRow = ({id, firstName, lastName, email, phone}) => {

    return (
            <div className="tr__container" data-item={id}>
                <div>{id}</div>
                <div>{firstName}</div>
                <div>{lastName}</div>
                <div>{email}</div>
                <div>{phone}</div>
            </div>
    )
}


TableRow.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    id: PropTypes.number
}