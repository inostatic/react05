import React, {createRef, useEffect} from "react"

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