import React from "react"
import {Button} from "./Button";
import {useDispatch} from "react-redux";
import {selectAC} from "../redux/action/select";

export const Header = () => {
    const dispatch = useDispatch()
    const db = {
        'Большой': 'bd',
        'Маленький': 'sd'
    }

    function changeData(db) {
        console.log('changeData')
        return () => {
            dispatch(selectAC(db))
        }
    }


    return (
        <div className="header__container">
            <div className="header__title">Выбрать набор данных:</div>
            <div className="header__buttons">
                {
                    Object.keys(db).map((btn, inx) => <Button text={btn} key={inx} onClick={changeData(db[btn])}/>)
                }
            </div>
        </div>
    )
}


