import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import allReducers from "./reducers/index";
import WebPage from './components/WebPage';

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <WebPage/>
    </Provider>,

    document.getElementById('root'));
registerServiceWorker();
