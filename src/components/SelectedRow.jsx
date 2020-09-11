import React from "react"
import PropTypes from "prop-types";


export const SelectedRow = ({firstName, lastName, description, address}) => {

    return (
        <>
            {
                firstName &&
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

SelectedRow.defaultProps = {
    address: {
        streetAddress: '',
        city: '',
        state: '',
        zip: ''
    },
    description: '',
}

SelectedRow.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    description: PropTypes.string,
    address: PropTypes.object
}
