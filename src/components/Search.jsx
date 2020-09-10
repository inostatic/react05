import React from "react"
import {Button} from "./Button";

export const Search = () => {

    return (
        <div className="search__container">
            <input type="text"/>
            <Button text={'Поиск'}/>
        </div>
    )
}