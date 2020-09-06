import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
           
            <nav>
                <a href="/post">Post</a>
                <a href="/notyfication">Notification</a>
                <a href="/comment">About us</a>
                
            </nav>
        </div>
    );
};

export default Header;