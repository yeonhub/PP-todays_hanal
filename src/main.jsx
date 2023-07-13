import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/index.jsx'
import GlobalStyle from '../Global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
