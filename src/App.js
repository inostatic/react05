import React from 'react'
import './scss/index.scss'
import {Header} from "./components/Header"
import {Home} from "./pages/Home"
import {useSelector} from "react-redux"

function App() {
    const select = useSelector(({select}) => select.select)

    return (
        <div className="app">
            <div className="app__content">
                <Header/>
                {select && <Home select={select}/>}
            </div>
        </div>
    );
}

export default App
