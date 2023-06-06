import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ShowContextProvider } from './context/showContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShowContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ShowContextProvider>,
)
