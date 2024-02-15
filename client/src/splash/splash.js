import styles from './splash.module.css'
import logo from "../img/splash.png"
import arrowIcon from "../img/arrow.svg";
import { Link } from 'react-router-dom';

function Splash() {
    return (
        <div className="Register">
            <img className={styles.img} src={logo} alt="" />
            <h1 className={styles.title}>LOGIN OR REGISTER</h1>
            <form>
                <Link to="/login" className={styles.button}>
                    <div className={styles.arrowContainer}>
                        <div>
                            <span className={styles.buttonText}>LOGIN</span>
                        </div>
                        <div>
                            <img src={arrowIcon} alt="arrow-Icon" />
                        </div>
                    </div>
                </Link>
                <Link to="/signup" className={styles.button}>
                    <div className={styles.arrowContainer}>
                        <div >
                            <span className={styles.buttonText}>REGISTER</span>
                        </div>
                        <img src={arrowIcon} alt="arrow-Icon" />
                    </div>
                </Link>

                <div className={styles.bottomLine}></div>
            </form>
        </div>
    )
}

export default Splash;