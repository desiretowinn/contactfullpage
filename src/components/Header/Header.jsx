import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import "./index.scss";

const Header = () => {
    return (
        <div>

            <header>

                <div className="header">


                    <i className='bx bx-left-arrow-circle' ></i>

                    <div className="header__box">
                        <form className="header__box--form">
                            <input type="search" className="header__box--form-input" placeholder='Search ...'/>

                            <a href="#" className="header__box--form-link"><i className='bx bx-bell' ></i></a>
                        </form>
                    </div>

                </div>
            </header>

        </div>
    );
};

export default Header;