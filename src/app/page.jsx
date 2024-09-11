import Image from 'next/image'
import Styles from './home.module.css'
const Home = async () => {
    // await new Promise(res => setTimeout(res, 3000))
    return (
        <div className={`wrapper ${Styles.home}`}>
            <div className={Styles.textContainer}>
                <h1 className={Styles.title}>Sir Bizzle VSP Creative.</h1>
                <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className={Styles.homeButtons}>
                    <button className={Styles.homeBtn}>Learn More</button>
                    <button className={Styles.homeBtn}>Contact</button>
                </div>
                <div className={Styles.iconContainer}>
                    <Image src="/brands.png" fill />
                </div>
            </div>
            <div className={Styles.imageContainer}>
                <Image src="/hero.gif" fill />
            </div>
        </div>
    )
}

export default Home