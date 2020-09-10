import React from "react"

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