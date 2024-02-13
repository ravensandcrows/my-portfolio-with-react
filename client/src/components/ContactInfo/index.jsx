function ContactInfo() {

    const icons = [
        {
            name: "fab fa-github",
            link: "https://github.com/ravensandcrows"
        },
        {
            name: "fab fa-linkedin",
            link: "https://www.linkedin.com/in/kaliblackstorm"
        }
    ]
    return (
        <section className="contactInfoBC">
            {icons.map(icon =>
            (
                <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer" className="anchor">
                    <i className={icon.name}></i>
                </a>
            )
            )}
        </section>
    )
}

export default ContactInfo