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
                        src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        fill
                    />
                </div>
                <span className={Styles.date}>9/13/24</span>
            </div>
            <div className={Styles.body}>
                <h4>Test title</h4>
                <p>Description</p>
                <Link href="/blog/post">See More</Link>
            </div>
        </div>
    )
}
