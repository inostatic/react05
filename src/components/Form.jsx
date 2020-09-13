import React, {useEffect, useState} from "react"
import {Button} from "./Button";

export const Form = ({sendForm}) => {
    const [form, setForm] = useState(false)
    const [btnBlock, changeBtnBlock] = useState(true)
    const [id, setId] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const openCloseForm = () => {
        setForm(!form)
    }

    useEffect(() => {
        if (id && firstName && lastName && email && phone) {
            changeBtnBlock(false)
        } else if (!id || !firstName || !lastName || !email || !phone) {
            changeBtnBlock(true)
        }
    }, [id, firstName, lastName, email, phone])


    const addForm = () => {
        sendForm({
            id: +id,
            firstName, lastName, email, phone
        })

    }

    return (
        <div className="form__container">
            {form &&
            <>
                <div className="form__title" onClick={openCloseForm}><Button text={'Закрыть форму'}
                                                                             onClick={openCloseForm}/></div>
                <div className="form-item__container">
                    <div className="form__item">
                        <div className="item__title">id:</div>
                        <input
                            type="number"
                            onChange={(e) => setId(e.target.value)}
                            value={id}
                        />
                    </div>
                    <div className="form__item">
                        <div className="item__title">firstName:</div>
                        <input
                            type="text"
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                        />
                    </div>
                    <div className="form__item">
                        <div className="item__title">lastName:</div>
                        <input
                            type="text"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                        />
                    </div>
                    <div className="form__item">
                        <div className="item__title">email:</div>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div className="form__item">
                        <div className="item__title">phone:</div>
                        <input
                            type="text"
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                        />
                    </div>
                </div>
                <div className="form__buttons">
                    <Button text={'Добавить'} onClick={addForm} btnBlock={btnBlock}/>
                </div>
            </>
            }
            {!form &&
            <div className="form__title"><Button text={'Открыть форму'} onClick={openCloseForm}/></div>
            }
        </div>
    )
}
