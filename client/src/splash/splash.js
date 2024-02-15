import styles from './splash.module.css'
import logo from "../img/splash.png"
import arrowIcon from "../img/arrow.svg";

function Splash() {
    return (
        <div className="Register">
            <img className={styles.img} src={logo} alt="" />
            <h1 className={styles.title}>LOGIN OR</h1>
            <h1 className={styles.title}>REGISTER</h1>
            <form>
                <button className={styles.button}>
                    <div className={styles.arrowContainer}>
                        <div >
                            <span className={styles.buttonText}>LOGIN</span>
                        </div>
                        <img src={arrowIcon} alt="arrow-Icon" />
                    </div>
                </button>
                <button className={styles.button}>
                    <div className={styles.arrowContainer}>
                        <div >
                            <span className={styles.buttonText}>REGISTER</span>
                        </div>
                        <img src={arrowIcon} alt="arrow-Icon" />
                    </div>
                </button>
            </form>
        </div>
    )
}

export default Splash;