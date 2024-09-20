import Image from 'next/image'
import Styles from './home.module.css'
import Link from 'next/link'
import { auth } from '@/lib/auth'

const Home = async () => {
    // await new Promise(res => setTimeout(res, 3000))
    const session = await auth()
    console.log(session)

    return (
        <>
            {session && (
                <div className={Styles.welcome}>
                    <p
                        styles={{ color: 'white' }}
                    >{`Welcome ${session.username}!`}</p>
                </div>
            )}
            <div className={`wrapper ${Styles.home}`}>
                <div className={Styles.textContainer}>
                    <h1 className={Styles.title}>Sir Bizzle VSP Creative.</h1>
                    <p className={Styles.intro}>
                        Unlock the potential of your online presence with a
                        creative web developer who blends innovative design with
                        cutting-edge technology. From eye-catching visuals to
                        seamless user experiences, I craft websites that not
                        only captivate but also convert. Let’s turn your vision
                        into a stunning digital reality.
                    </p>
                    <div className={Styles.homeButtons}>
                        <Link href="/about">
                            <button
                                className={`${Styles.homeBtn} ${Styles.learnMore}`}
                            >
                                Learn More
                            </button>
                        </Link>
                        <Link href="/contact">
                            <button className={Styles.homeBtn}>Contact</button>
                        </Link>
                    </div>
                    <div className={Styles.iconContainer}>
                        <Image src="/brands.png" fill alt="" />
                    </div>
                </div>
                <div className={Styles.imageContainer}>
                    <Image className={Styles.img} src="/hero.gif" fill alt="" />
                </div>
            </div>
        </>
    )
}

export default Home
