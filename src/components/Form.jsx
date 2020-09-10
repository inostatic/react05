import React, {useState} from "react"
import {Button} from "./Button";

export const Form = () => {
    const [form, setForm] = useState(false)

    const clickForm = () => {
        setForm(!form)
    }

    return (
        <div className="form__container">
            {form &&
            <>
                <div className="form__title" onClick={clickForm}><Button text={'Закрыть форму'}/></div>
                <div className="form__headers">
                    <div className="header__item">id:</div>
                    <div className="header__item">firstName:</div>
                    <div className="header__item">lastName:</div>
                    <div className="header__item">email:</div>
                    <div className="header__item">phone:</div>
                </div>
                <div className="form__inputs">
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                </div>
                <div className="form__buttons">
                    <Button text={'Добавить'} />
                </div>
            </>
            }
            {!form &&
            <div className="form__title" onClick={clickForm}><Button text={'Открыть форму'}/></div>
            }


        </div>
    )
}