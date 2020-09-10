import React from "react"

export const SelectedRow = ({firstName, lastName, description, address}) => {

    return (
        <>
            {
                address &&
                <div className="info__container">
                    <div>Выбран пользователь: <strong>{firstName} {lastName}</strong></div>
                    <div>Описание: <strong>{description}</strong></div>
                    <div>Адрес проживания: <strong>{address.streetAddress}</strong></div>
                    <div>Город: <strong>{address.city}</strong></div>
                    <div>Провинция/штат: <strong>{address.state}</strong></div>
                    <div>Индекс: <strong>{address.zip}</strong></div>
                </div>
            }
        </>
    )
}

