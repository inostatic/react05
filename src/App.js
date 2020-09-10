import React from 'react';
import './scss/index.scss';
import {Header} from "./components/Header";
import {Home} from "./pages/Home";

function App() {
  return (
    <div className="app">
        <div className="app__content">
            <Header/>
            <Home/>
        </div>
    </div>
  );
}

export default App;
