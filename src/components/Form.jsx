import React, {useEffect, useState} from "react"
import {Button} from "./Button";
import {sendFormAc} from "../redux/action/data";
import {useDispatch} from "react-redux";

export const Form = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState(false)
    const [btnBlock, changeBtnBlock] = useState(true)
    const [id, setId] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const openCloseForm = () => {
        console.log('openCloseForm')
        setForm(!form)
    }

    useEffect(() => {
        if (id && firstName && lastName && email && phone) {
            changeBtnBlock(false)
        } else if (!id || !firstName || !lastName || !email || !phone) {
            changeBtnBlock(true)
        }
    }, [id, firstName, lastName, email, phone])


    function sendForm() {
        return () => {
            dispatch(sendFormAc({
                id: +id,
                firstName, lastName, email, phone
            }))
        }
    }

    return (
        <div className="form__container">
            {form &&
            <>
                <div className="form__title" onClick={openCloseForm}><Button text={'Закрыть форму'}  onClick={openCloseForm}/></div>
                <div className="form__headers">
                    <div className="header__item">id:</div>
                    <div className="header__item">firstName:</div>
                    <div className="header__item">lastName:</div>
                    <div className="header__item">email:</div>
                    <div className="header__item">phone:</div>
                </div>
                <div className="form__inputs">
                    <input
                        type="number"
                        onChange={(e) => setId(e.target.value)}
                        value={id}
                    />
                    <input
                        type="text"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                    />
                    <input
                        type="text"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                    />
                    <input
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <input
                        type="text"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                    />
                </div>
                <div className="form__buttons">
                    <Button text={'Добавить'} onClick={sendForm()} btnBlock={btnBlock}/>
                </div>
            </>
            }
            {!form &&
            <div className="form__title"><Button text={'Открыть форму'}  onClick={openCloseForm}/></div>
            }
        </div>
    )
}