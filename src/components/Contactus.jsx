import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contactus = () => {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const SERVICE_ID = 'service_i51aj31'
        const TEMPLATE_ID = 'template_um8x55j'
        const PUBLIC_KEY = 'skowGbhznhmEzA0Bn'

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset()
    };

    return (
        <div className='contactus' id='contact'>
            <form ref={form} onSubmit={sendEmail} className='col-lg-4 col-md-6 col-sm-8 col-8'>
                <h1 className='font-weight-light mb-5 mt-5'>Contact</h1>
                <input type="text" name="name" placeholder='FULL NAME' />
                <input type="email" name="email" placeholder='EMAIL' />
                <textarea name="message" cols="20" rows="1" placeholder='MESSAGE' />
                <button type='submit'>SUBMIT</button>
            </form>
        </div>
    )
}

export default Contactus