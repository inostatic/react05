import React from "react"
import {Button} from "./Button";

export const Header = () => {
    const buttons = ['Большой', 'Маленький']
    return (
        <div className="header__container">
            <div className="header__title">Выбрать набор данных:</div>
            <div className="header__buttons">
                {
                    buttons.map(btn => <Button text={btn}/>)
                }
            </div>
        </div>
    )
}


