import { useState } from 'react';

import './App.scss';

import Header from './Components/Header/Header';
import Catalogue from './Components/Catalogue/Catalogue';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import Footer from './Components/Footer/Footer';



function App() {

    return (
        <div className="App">
            <Header />
            <Catalogue />
            <HowItWorks />
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A3907c9c80e53159aab409c57d532aa3f7b6aa0e26cae5b205769e0128ea368b3&amp;source=constructor" width="100%" height="399" frameborder="0"></iframe>
            <Footer />
        </div>
    )
}

export default App;
