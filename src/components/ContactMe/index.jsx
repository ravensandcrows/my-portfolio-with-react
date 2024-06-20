import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactMe() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };
  return (
    <section>
      <form 
        name="contact v1" 
        method="post" 
        data-netlify="true" 
        data-netlify-honeypot="bot-field"
        // onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact v1"></input>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            id="name"
            type="text"
            defaultValue={name}
            onBlur={handleChange}
            autoComplete='on'
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
            autoComplete='on'
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
            autoComplete='on'
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <div className="center">
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default ContactMe;
