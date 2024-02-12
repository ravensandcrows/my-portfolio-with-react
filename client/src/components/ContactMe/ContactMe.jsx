import './ContactMe.css'

function ContactMe() {
  return (
    <section>
      <form id="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue="email"
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea 
            name="message"
            rows="5"
            defaultValue="message"
          />
        </div>
        <div className="center">
            <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default ContactMe;
