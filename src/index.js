import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css"
import TestData from './components/TestData/TestData';
import InstagramImages from './components/instagramImages/InstagramImages';
import Header from "./components/header/Header"
import About from './components/about/about';
import Footer from './components/footer/footer';
import AddImagesForm from "./components/_admin/AddImageForm/AddImagesForm"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Router>
    <Header />
      <Routes>
        <Route path="/" element={<TestData></TestData>}></Route>
        <Route path='/instagram' element={<InstagramImages/>}></Route>
        <Route path='/admin' element={<AddImagesForm></AddImagesForm>}></Route>
          {/* <About></About> */}
      </Routes>
    <Footer />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
