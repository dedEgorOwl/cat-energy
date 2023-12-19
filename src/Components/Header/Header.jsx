import { useState, useEffect } from 'react';

import './Header.scss';

function Header() {
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);
    
    useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize([window.innerWidth, window.innerHeight]);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    
    return (
        <div className="wrapper header">
            <div className="content">
                <div className="top">
                    <img src="/icons/logo-desktop.svg" />
                    <div className="navbar">
                        <div className="item">ГЛАВНАЯ</div>
                        <div className="item">КАТАЛОГ ПРОДУКЦИИ</div>
                        <div className="item">ПОДБОР ПРОГРАММЫ</div>
                    </div>
                    <div className="menu"></div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <h1>Функциональное
                            {
                                (windowSize[0] > 1000) ?  <br /> : <></>
                            }
                            питание для котов
                        </h1>
                        <h2>ЗАНЯЛСЯ СОБОЙ? ЗАЙМИСЬ КОТОМ!</h2>
                        <button>ПОДОБРАТЬ ПРОГРАММУ</button>
                    </div>
                    <img src="/imgs/index-can-desktop@1x.png" />
                </div>
            </div>
        </div>
    )
};

export default Header;