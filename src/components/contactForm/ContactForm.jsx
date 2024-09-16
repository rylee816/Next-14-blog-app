'use client'
import React from 'react'
import Styles from './contactForm.module.css'
import { useRouter } from 'next/navigation'

export default function ContactForm() {
    const router = useRouter()

    return (
        <div className={Styles.contact}>
            <form className={Styles.contactForm} action={() => null}>
                <input
                    className={Styles.input}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                />
                <input
                    className={Styles.input}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                />
                <input
                    className={Styles.input}
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number (Optional)"
                />
                <textarea
                    className={Styles.textarea}
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Message"
                />
                <div className={Styles.submitBtn}>
                    <button className={Styles.btn}>
                        Send
                    </button>
                </div>
            </form>
        </div>
    )
}
