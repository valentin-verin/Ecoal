import styles from './changename.module.css'
import { Link } from 'react-router-dom';
function Changename() {
    return (
        <div className="login">
            {/* <button className={styles.back}>
                BACK
            </button> */}
            <div className={styles.padding}>
                <Link to="/" className={styles.backButton}>Back</Link>
                <h1 className={styles.title}>NAME</h1>
            </div>

            <form>

                    <input
                        type="text"
                        id="Name"
                        name="Name"
                        placeholder="Name"
                        className={styles.username}
                    />

                <button
                    type="submit"
                    value="Save Changes"
                    className={styles.button}
                >SAVE CHANGES</button>
            </form>

        </div>
    )
}

export default Changename;