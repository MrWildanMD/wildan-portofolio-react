/* eslint-disable no-undef */
import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    event.target.reset;
  };
  return (
    <div className='bg-base-200 p-10' id='#contact'>
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3'>
        <div className='text-center w-[300px] lg:w-full'>
          <h1 className='text-5xl font-bold'>Contact Me!</h1>
          <p className='py-6'>
            I am excited about the opportunity to join your team and contribute to the development
            of innovative projects. To contact me, please email me at mrwildanm7@gmail.com. I am
            available to discuss the position further and answer any questions you may have. I look
            forward to the opportunity to speak with you. Best Regards, Wildan
          </p>
        </div>
        <div className='w-[300px] lg:w-full flex flex-col justify-center items-center'>
          <form ref={form} onSubmit={handleSubmit}>
            <label htmlFor='email'>Email:</label>
            <input
              required
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <br />
            <label htmlFor='message'>Message:</label>
            <textarea
              required
              id='message'
              name='message'
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <br />
            <button
              className='hover:text-secondary font-bold hover:border-2 hover:border-primary rounded p-2'
              type='submit'
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
