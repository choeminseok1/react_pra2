import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)

// provider = app과 store을 연결시켜주는 역할 
// main.js = app.js를 index.html에 랜더링 시켜주는 역할 
