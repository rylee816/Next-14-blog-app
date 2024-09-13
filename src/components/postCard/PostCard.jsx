import React from 'react'
import Styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function PostCard() {
    return (
        <div className={Styles.postCard}>
            <div className={Styles.top}>
                <div className={Styles.imageContainer}>
                    <Image
                        className={Styles.img}
                        src="/about.png"
                        alt=""
                        fill
                    />
                </div>
                <span className={Styles.date}>9.12.24</span>
            </div>
            <div className={Styles.body}>
                <h4>Test title</h4>
                <p>Description</p>
                <Link href="/blog/post">See More</Link>
            </div>
        </div>
    )
}
