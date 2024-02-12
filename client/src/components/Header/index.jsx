function Header(props) {
    return (
        <header>
            {/* <img id="profile" src="Assets/images/Kali copy 2.jpeg" alt="photo of the developer"> */}
            <h1>Kali Blackstorm</h1>
            {props.children}
        </header>
    )
}

export default Header