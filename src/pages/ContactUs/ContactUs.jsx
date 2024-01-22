import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import styles from './ContactUs.module.css'
import { motion } from 'framer-motion';

function ContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9vahbhv', 'template_wa1o4nu', form.current, 'srpfsAPOIyoCVdRYO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <motion.div className={styles.formCont} initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
            <form className={styles.form} ref={form} onSubmit={sendEmail}>
                <label className={styles.lable}>Name</label>
                <input className={styles.inp} type="text" name="user_name" />
                <label className={styles.lable}>Email</label>
                <input className={styles.inp} type="email" name="user_email" />
                <label className={styles.lable}>Message</label>
                <textarea className={styles.inp} name="message" />
                <input className={styles.btn} type="submit" value="Send Message" />
            </form>
        </motion.div>
    );
}

export default ContactUs
