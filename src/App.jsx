import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Header from './components/Header'
import RegisterForm from './forms/RegisterForm'
import LoginForm from './forms/LoginForm'
import Layout from './pages/Layout'
import Home from './pages/Home'
import { Provider } from 'react-redux'
import store from './store/store'
import Product from './pages/Product'
import CreateProductForm from './forms/CreateProductForm'
import DetailPage from './components/DetailPage'
import CartPage from './components/CartPage'



const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/products' element={<Product />}/>
        <Route path='/create-product' element={<CreateProductForm />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path='/product/:id' element={<DetailPage />} />
        </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
