import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import { MyStore } from './store/store'

const AppContainer = () => {
    return (
        <Router>
            <MyStore>
                <App />
            </MyStore>
        </Router>
    )
}

const Root = document.getElementById("root")

ReactDOM.render(<AppContainer />, Root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
