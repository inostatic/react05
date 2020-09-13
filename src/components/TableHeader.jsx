import React, {useState} from "react"
import {useDispatch} from "react-redux"
import {sortByAC} from "../redux/action/data"


export const TableHeader = () => {
    const dispatch = useDispatch()
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
            dispatch(sortByAC({
                key,
                flag: sortItem[key].flag
            }))
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