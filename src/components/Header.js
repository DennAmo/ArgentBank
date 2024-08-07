import React from 'react';
import { NavLink } from "react-router-dom";
import logoIcon from '../assets/logoIcon.bmp';

const Header = () => {

    return (
        <header className='header'>
            <h1 className='header__title'>Argent Bank</h1>
            <nav className='header__link'>
                <NavLink to="/" end className="header__img">
                    <img src={logoIcon} alt="ArgentBank" className='header__logo'/>
                </NavLink> 

                    <div className='header__logon'>
                            <i className='fa-solid fa-2x fa-circle-user' />
                            <p>test</p>

                            <i className='fa-solid fa-arrow-right-from-bracket' />
                            <p> Sign out </p>
                    </div>

                    <NavLink to="/signin" end className='header__signin'>

                            <i className="fa-solid fa-circle-user"></i>
                            <p>Sign In</p>
                            </NavLink> 

                    
            </nav>
        </header>
    ) 
}

export default Header