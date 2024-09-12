import Image from 'next/image'
import Styles from './home.module.css'
const Home = async () => {
    // await new Promise(res => setTimeout(res, 3000))
    return (
        <div className={`wrapper ${Styles.home}`}>
            <div className={Styles.textContainer}>
                <h1 className={Styles.title}>Sir Bizzle VSP Creative.</h1>
                <p className={Styles.intro}>
                    Unlock the potential of your online presence with a creative
                    web developer who blends innovative design with cutting-edge
                    technology. From eye-catching visuals to seamless user
                    experiences, I craft websites that not only captivate but
                    also convert. Let’s turn your vision into a stunning digital
                    reality.
                </p>
                <div className={Styles.homeButtons}>
                    <button className={Styles.homeBtn}>Learn More</button>
                    <button className={Styles.homeBtn}>Contact</button>
                </div>
                <div className={Styles.iconContainer}>
                    <Image src="/brands.png" fill alt="" />
                </div>
            </div>
            <div className={Styles.imageContainer}>
                <Image className={Styles.img} src="/hero.gif" fill alt="" />
            </div>
        </div>
    )
}

export default Home
