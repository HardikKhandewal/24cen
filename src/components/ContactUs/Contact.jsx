import React from 'react';
import ContactForm from './ContactForm';
import ContactSection from './ContactSection';

const Contact = ()=>{
    return(
        <>
            <div className='flex flex-row justify-center items-center flex-wrap mx-auto w-2/3'>
                <ContactSection/>
                <div >
                <iframe className='border border-black border-slate-300 rounded-r-3xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.9169795659313!2d75.69798577534577!3d22.61957517945826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396257bddc3693ff%3A0x2cdfce882d449b41!2s21st%20century%20caps%20solutions%20private%20limited!5e0!3m2!1sen!2sin!4v1734960018228!5m2!1sen!2sin" width="480" height="360" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
           
            <ContactForm/>        
        </>
    )
}

export default Contact;