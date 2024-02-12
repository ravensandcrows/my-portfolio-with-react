import './Header.css'
function Header() {
    return (
        <header>
            {/* <img id="profile" src="Assets/images/Kali copy 2.jpeg" alt="photo of the developer"> */}
                <h1>Kali Blackstorm</h1>
                <nav>
                    <ul>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#work">My Work</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header