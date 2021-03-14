import React from 'react';
import ALogo from '../../assets/AmazonLogo.png';

// Separation of Concerns

export const Header = () => {

    return (
        <header className="header__main">
            <figure className="header__figure">
                <img src={ALogo} alt="Amazon Logo" width="85%" />
            </figure>
        </header>
    )
};