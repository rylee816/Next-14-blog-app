import React from 'react'
import Image from 'next/image'
import Styles from './about.module.css'

export default function About() {
    return (
        <div className={Styles.about}>
            <div className={Styles.textContainer}>
                <h2 className={Styles.title}>About Sir Bizzle</h2>
                <div className={Styles.header}>
                    Bolder, better ideas that help bring value to the digital
                    world.
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis aut adipisci magni nesciunt necessitatibus
                    asperiores facere nemo delectus corrupti optio rem, odit
                    velit! Veritatis inventore voluptas numquam, enim nostrum
                    fugit.
                </p>
                <div className={Styles.boxes}>
                  <div className={Styles.box}>
                    <h3>5+</h3>
                    <p>Years of experience</p>
                  </div>
                  <div className={Styles.box}>
                    <h3>10.5 K+</h3>
                    <p>Unfinished projects</p>
                  </div>
                  <div className={Styles.box}>
                    <h3>210 K+</h3>
                    <p>GitHub Repos</p>
                  </div>
                </div>
            </div>
            <div className={Styles.imageContainer}>
                <Image src="/about.png" fill />
            </div>
        </div>
    )
}
