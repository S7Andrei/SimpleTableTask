import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header/Header.jsx'
import App from './App.jsx'
import Footer from './Components/Footer/Footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
)
