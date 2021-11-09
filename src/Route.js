import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Product from "./Components/Product.js";
import ProductItem from "./Components/ProductItem.js";

import Navbars from "./Components/Navbar.js";

function RouterConfig() {
    return (
        <div>
            <Router>
                <Navbars/>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/product" element={<Product/>} />
                    <Route path="/product/:id" element={<ProductItem/>} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>

            </Router>
        </div>
    );
}

export default RouterConfig;    