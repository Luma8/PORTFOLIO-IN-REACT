import React, { useState } from 'react';
import '../Styles/navbar.scss'
import LumaLogo from '../assets/LumaLogo.png';

const Navbar = () => {
    const [activelink, setActiveLink] = useState('');

    const handleClick = (e: any) => {
        e.preventDefault();
        setActiveLink(e.target.hash);
    }

    return (
        <div className="nav-bar">
            <div className='container d-flex align-items-center justify-content-between'>
                <img className='logo' src={LumaLogo} />
                <div>
                    <ul className='list'>
                        <li className='list-items'>
                            <a className={activelink === '#home' ? 'active' : 'normal'} href="#home" onClick={handleClick}>
                                Home
                            </a>
                        </li>
                        <li className='list-items'>
                            <a className={activelink === '#about' ? 'active' : 'normal'} href="#about" onClick={handleClick}>
                                About
                            </a>
                        </li>
                        <li className='list-items'>
                            <a className={activelink === '#project' ? 'active' : 'normal'} href="#project" onClick={handleClick}>
                                Project
                            </a>
                        </li>
                        <li className='list-items'>
                            <a className={activelink === '#contact' ? 'active' : 'normal'} href="#contact" onClick={handleClick}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;