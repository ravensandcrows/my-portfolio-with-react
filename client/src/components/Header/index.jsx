import profilePic from '../../assets/Kali.jpeg'
function Header(props) {
    return (
        <header>
            <img id="profile" src={profilePic} alt="photo of the developer"></img>
            <h1>Kali Blackstorm</h1>
            {props.children}
        </header>
    )
}

export default Header