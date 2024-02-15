import styles from './splash.module.css'
import logo from "../img/splash.png"

function Splash() {
    return (
        <div className="Register">
            <img className={styles.img} src={logo} alt="" />
            <h1 className={styles.title}>LOGIN OR</h1>
            <h1 className={styles.title}>REGISTER</h1>
            <form>
                <button className={styles.button}>
                    LOGIN
                </button>
                <button className={styles.button}>
                    REGISTER
                </button>
            </form>
        </div>
    )
}

export default Splash;