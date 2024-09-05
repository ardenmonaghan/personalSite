// navBar creation header

const Header = () => {
    return (
        <nav className="">
            <div className="header-container">
                <a className="header-name" href="#">Arden Monaghan</a>
                <ul className="nav-links">
                    <li>
                        <a className="header-font" href="#">About</a>
                    </li>
                    <li>
                        <a className="header-font" href="#">Resume</a>
                    </li>
                    <li>
                        <a className="header-font" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
       
    );
};

export default Header;