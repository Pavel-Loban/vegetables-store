import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import './App.scss';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Navigation from "./Components/Navigation/Navigation";
import SubNavigation from "./Components/SubNavigation/SubNavigation";
import Nuts from "./pages/nuts/nuts";
import Vegetables from "./pages/vegetables/vegetables";
import Home from "./pages/home/home";
import Fruits from "./pages/fruits/fruits";
import Beverage from "./pages/beverage/beverage";
import EggsDairy from "./pages/eggs&dairy/eggs&dairy";
import EggsDairyItem from "./pages/eggs&dairy/eggsDairyItem/eggsDairyItem";
import PageNotFound from "./pages/pageNotFound/pageNotFound";


function App() {
  return (
    <Router>
      <div className="App">
        {/* <div> */}
        <Navigation/>
        <SubNavigation/>
        <NavBar/>
        {/* <Home /> */}
      {/* <Header /> */}
      <div className='content'>
      <Routes >
        <Route path="/" element={<Home /> }  />
        <Route path="/nuts" element={<Nuts /> } />
        <Route path="/vegetables" element={<Vegetables  /> } />
        <Route path="/fruits" element={<Fruits  /> } />
        <Route path="/beverage" element={<Beverage  /> } />
        <Route path="/eggs&dairy" element={<EggsDairy  /> } />
        <Route path="/eggs&dairy/:id" element={<EggsDairyItem /> } />
        <Route path="/404" element={<PageNotFound /> } />
        <Route path="*" element={<Navigate replace to='/404' /> } />
      </Routes>
      </div>
      <Footer/>
        {/* </div> */}

      </div>
    </Router>
  );

}

export default App;
