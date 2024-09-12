'use client'
import React from 'react'
import Styles from './contactForm.module.css'

export default function ContactForm() {
    return (
        <div className={Styles.contact}>
            <form className={Styles.contactForm} action={() => null}>
                <input
                    className={Styles.input}
                    type="text"
                    id="name"
                    name="name"
                    // value={'name'}
                    placeholder="Full Name"
                />
                <input
                    className={Styles.input}
                    type="email"
                    id="email"
                    name="email"
                    // value={'email'}
                    placeholder="Email"
                />
                <input
                    className={Styles.input}
                    type="text"
                    id="phone"
                    name="phone"
                    // value={'phone'}
                    placeholder="Phone Number (Optional)"
                />
                <textarea
                    className={Styles.textarea}
                    type="text"
                    id="message"
                    name="message"
                    // value={'message'}
                    placeholder="Message"
                />
            </form>
            <div className={Styles.submitBtn}>
                <button className={Styles.btn}>Send</button>
            </div>
        </div>
    )
}
