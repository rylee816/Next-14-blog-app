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
                <p className={Styles.introText}>
                    At the heart of my web development approach is a commitment
                    to collaboration and innovation. I believe that the best
                    solutions emerge from working closely with clients,
                    understanding their unique needs, and blending their vision
                    with creative expertise. Together, we’ll push the boundaries
                    of design and technology to create a website that stands out
                    and delivers exceptional results.
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
                <Image className={Styles.img} src="/about.png" fill alt="" />
            </div>
        </div>
    )
}
