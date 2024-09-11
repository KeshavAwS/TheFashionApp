import React, { useRef, useState } from 'react';
import './contact.css';// Make sure to import your CSS file

export default function Contact(){
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [formData, setFormData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get values from useRef
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    // Set the form data in state
    setFormData({ name, email, message });
  };

  return (
    <div className='ccc'>
      <div className={`wrapperCon centered ${formData ? 'sent' : ''}`}>
      <article className="letter">
        <div className="side">
          <h1>Contact us</h1>
          <br></br>
          <p>
            <textarea ref={messageRef} placeholder="Your message" required></textarea>
          </p>
        </div>
        <div className="side">
          <p>
            <input ref={nameRef} type="text" placeholder="Your name" required/>
          </p>
          <p>
            <input ref={emailRef} type="email" placeholder="Your email"  required/>
          </p>
          <p>
            <button id="sendLetter" onClick={handleSubmit}>
              Send
            </button>
          </p>
        </div>
      </article>
      <div className="envelope front"></div>
      <div className="envelope back"></div>
      {formData && (
        <p className="result-message centered">
          Thank you for your message, {formData.name} ! <br />
          Email: {formData.email} <br />
          Message: {formData.message}
        </p>
      )}
    </div>
    </div>
  );
};
