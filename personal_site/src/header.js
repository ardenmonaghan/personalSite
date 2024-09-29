import { useState, useEffect } from 'react';

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <header className={isSticky ? 'sticky' : ''}>
            <nav>
                <div className="header-container">
                    <a className="header-name" href="#">Arden Monaghan</a>
                    <ul className="nav-links">
                        <li>
                            <a className="header-font" href="#about">About</a>
                        </li>
                        <li>
                            <a className="header-font" href="#contact">Contact</a>
                        </li>
                        <li>
                            <a className="header-font header-resume" href="/resume.pdf" download="ArdenMonaghan-Resume-2024.pdf">Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;