import React, {useState} from "react"


export const TableHeader = ({sortByKey}) => {
    const [before, after] = ['▼', '▲']
    const initialState = {
        id: {el: before, flag: false},
        firstName: {el: before, flag: false},
        lastName: {el: before, flag: false},
        email: {el: before, flag: false},
        phone: {el: before, flag: false}
    }
    const [sortItem, setSortItem] = useState(initialState)

    const sortChangeGraphElem = key => {
        const el = after
        const flag = !sortItem[key].flag
        sortItem[key].el === before
            ? setSortItem({
                ...initialState,
                [key]: {el, flag}})
            : setSortItem({...initialState})
    }


    function sortBy(key) {
        return () => {
            sortChangeGraphElem(key)
            sortByKey({
                key,
                flag: sortItem[key].flag
            })
        }
    }

    return (
        <div className="th_container">
            <div onClick={sortBy('id')}>id{sortItem.id.el}</div>
            <div onClick={sortBy('firstName')}>firstName{sortItem.firstName.el}</div>
            <div onClick={sortBy('lastName')}>lastName{sortItem.lastName.el}</div>
            <div onClick={sortBy('email')}>email{sortItem.email.el}</div>
            <div onClick={sortBy('phone')}>phone{sortItem.phone.el}</div>
        </div>
    )
}