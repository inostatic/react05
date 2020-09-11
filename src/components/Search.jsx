import React, {useState} from "react"
import {Button} from "./Button";
import {useDispatch} from "react-redux";
import {searchByStrAC} from "../redux/action/data";

export const Search = () => {
    const dispatch = useDispatch()
    const [searchString, setSearchString] = useState('')

    function sendSearchString() {
        return () => {
            dispatch(searchByStrAC(searchString))
        }
    }

    return (
        <div className="search__container">
            <input
                type="text"
                onChange={(e) => setSearchString(e.target.value)}
                value={searchString}
            />
            <Button
                text={'Найти'}
                onClick={sendSearchString()}
            />
        </div>
    )
}