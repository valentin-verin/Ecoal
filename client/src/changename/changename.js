import styles from './changename.module.css'

function Changename() {
    return (
        <div className="login">
            <button className={styles.back}>
                BACK
            </button>
            <h1 className={styles.title}>NAME</h1>
            <form>
                <div >
                    <input
                        type="text"
                        id="Name"
                        name="Name"
                        defaultValue="Name"
                        className={styles.username}
                    />
                </div>
                <input
                    type="submit"
                    value="Save Changes"
                    className={styles.button}
                />
            </form>
        </div>
    )
}

export default Changename;