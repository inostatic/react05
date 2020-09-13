import React, {createRef, useEffect} from "react"
import PropTypes from 'prop-types'

export const Button = ({text, onClick, btnBlock}) => {
    const btn = createRef()


    useEffect(() => {
        if (btnBlock) {
            btn.current.setAttribute('disabled', 'true')
        } else if (btnBlock === false) {
            btn.current.removeAttribute('disabled')
        }
    }, [btnBlock])

    return (
        <button ref={btn} className={`button ${btnBlock ? 'disabled' : ''}`} onClick={onClick}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    btnBlock: null,
    text: 'Добавить',
    onClick: () => {console.log('the behavior is undefined')}
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    btn: PropTypes.bool
}
