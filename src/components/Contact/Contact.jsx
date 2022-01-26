import React, {useRef, useState, useEffect} from 'react';
import emailjs from '@emailjs/browser';
import {ContactContainer, FormContainer, SendBtn} from "./Contact.styles";
import SectionTitle from "../SectionTitle/SectionTitle";

const Contact = () => {
  const form = useRef()
  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    let timer
    if (visible) {
      setMessage('Your Message has been sent!')
      timer = setTimeout(() => {
        setVisible(false)
        setMessage('')
      }, 3000)
    }

    return () => clearTimeout(timer)
  }, [visible])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_s35zlsp", "template_8eh9mgl", form.current, "user_9jaR9uK6p1lDg2YOkWPal")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      })

    e.target.reset()
    setVisible(true)
  }

  return (
    <ContactContainer id='contact'>
      <SectionTitle>
        Get In Touch
      </SectionTitle>
      <FormContainer ref={form} onSubmit={sendEmail} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-sky-500 text-xs font-bold mb-2"
                   htmlFor="grid-first-name">
              Full Name
            </label>
            <input
              className="appearance-none block w-full bg-sky-100 text-sky-900 border border-sky-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-full-name" type="text" placeholder="Jane Smith" name='fullName'/>
            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-sky-500 text-xs font-bold mb-2"
                   htmlFor="grid-password">
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-sky-100 text-sky-900 border border-sky-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-sky-300"
              id="email" name='email' type="email"/>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-sky-500 text-xs font-bold mb-2"
                   htmlFor="grid-password">
              Phone Number
            </label>
            <input
              className="appearance-none block w-full bg-sky-100 text-sky-900 border border-sky-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-sky-300"
              id="phone" name='phone_number' type="text"/>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-sky-500 text-xs font-bold mb-2"
                   htmlFor="grid-password">
              Message
            </label>
            <textarea
              className=" no-resize appearance-none block w-full text-sky-200 text-sky-900 border border-sky-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-sky-500 h-48 resize-none"
              id="message" name='message'>
            </textarea>
          </div>
        </div>
        <SendBtn className='sendBtn'>Submit</SendBtn>
        <p>{message}</p>
      </FormContainer>
    </ContactContainer>
  )
}

export default Contact;