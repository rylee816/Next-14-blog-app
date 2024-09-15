import React from 'react'
import Styles from './contact.module.css'
import Image from 'next/image'
import ContactForm from '@/components/contactForm/ContactForm'

export default function Contact() {  
  return (
    <div className={`wrapper ${Styles.contact}`}>
      <div className={Styles.imageContainer}>
        <Image className={Styles.image} src='/contact.png' fill alt="" />
      </div>
      <div className={Styles.formContainer}>
        <ContactForm /> 
      </div>
    </div>
  )
}
