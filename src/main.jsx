import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './Footer/footer'
import Form from './Form/form'
import Header from './Header/header'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Form/>
    <Footer/>
  </React.StrictMode>,
)
