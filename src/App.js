import React from 'react';
import HoverableSidenavButtons from "./components/HoverableSidenavButtons";
import Home from "./components/Home/Home";
import OrderForm from './components/OrderForm/OrderForm';
import CompanyInfo from './components/CompanyInfo/CompanyInfo';
import Footer from './components/Footer/Footer';
import './App.css'


function App() {
  return (
      <div className="App">

          <div className='background-container-standart'></div>

          <Home/>
          <HoverableSidenavButtons/>
          <CompanyInfo/>
          <OrderForm/>
          <Footer/>

      </div>
  );
}

export default App;
