import React from 'react'
import { ContactForm } from '../pages/ContactForm';
import { NavBar } from '../components/NavBar';
import { Gallery } from '../pages/Gallery';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Products } from '../pages/Products';
import { Login } from '../pages/Login';

export const AppRouter = () => {
    return (
        <Router>
        <NavBar></NavBar>
        <Routes>
          <Route exact path='/' element={<Gallery></Gallery>} />
          <Route exact path='/gallery' element={<Gallery></Gallery>} />
          <Route
            exact
            path='/contact-form'
            element={<ContactForm></ContactForm>}
          />
          <Route exact path='/products' element={<Products></Products>} />
          <Route exact path="/login" element={<Login></Login>} />
        </Routes>
      </Router>
    )
}