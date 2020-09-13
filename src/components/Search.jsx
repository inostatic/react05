import React, {useState} from "react"
import {Button} from "./Button"
import PropTypes from "prop-types"

export const Search = ({searchByString}) => {
    const [searchString, setSearchString] = useState('')

    function sendSearchString() {
        return () => {
            searchByString(searchString)
        }
    }

    return (
        <div className="search__container">
            <input
                type="text"
                onChange={(e) => setSearchString(e.target.value)}
                value={searchString}
            />
            <Button
                text={'Найти'}
                onClick={sendSearchString()}
            />
        </div>
    )
}

Search.propTypes = {
    searchByString: PropTypes.func.isRequired
}