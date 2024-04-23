import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Register from './register';
import SignIn from './signIn';
import ProductDetail from './single';
import Categories from './components/category';
import CategoryDetail from './singlecategory';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header /> 
      <Routes> 
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/category/:Id" element={<CategoryDetail />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
