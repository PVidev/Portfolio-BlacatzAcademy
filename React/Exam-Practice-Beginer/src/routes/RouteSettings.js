import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home';
import Practice1 from '../pages/practice1';
import Practice2 from '../pages/practice2';
import Practice3 from '../pages/practice3';
import Practice4 from '../pages/practice4';
import Practice5 from '../pages/practice5';
import Nachalo from '../pages/nachalo';
import About from '../pages/about';
import Contact from '../pages/contact';

export default function RouteSettings() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/practice1" exact element={<Practice1 />} />
                <Route path="/practice2" exact element={<Practice2 />} />
                <Route path="/practice3" exact element={<Practice3 />} />
                <Route path="/practice4" exact element={<Practice4 />} />
                <Route path="/practice5" exact element={<Practice5 />} />
                <Route path="/nachalo" exact element={<Nachalo />} />
                <Route path="/about" exact element={<About />} />
                <Route path="/contact" exact element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}