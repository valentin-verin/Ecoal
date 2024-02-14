import styles from './signup.module.css'
import logo from "../img/register.png"

function Login() {
    return (
        <div className="Register">
            <button className={styles.back}>
                back
            </button>
            <h1 className={styles.title}>REGISTER</h1>
            <img className={styles.img} src={logo} alt="" />
            <form>
                <div >
                    <input
                        type="text"
                        id="name"
                        name="name"
                        defaultValue="name"
                        className={styles.name}
                    />
                    <input
                        type="text"
                        id="username"
                        name="username"
                        defaultValue="username"
                        className={styles.username}
                    />
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        defaultValue="phone"
                        className={styles.phone}
                    />
                    <input
                        type="text"
                        id="email"
                        name="email"
                        defaultValue="email"
                        className={styles.email}
                    />
                </div>
                <div >
                    <input
                        type="password"
                        id="password"
                        name="password"
                        defaultValue="password"
                        className={styles.password}
                    />
                     <input
                        type="password"
                        id="repeat password"
                        name="repeat password"
                        defaultValue="repeat password"
                        className={styles.password}
                    />
                </div>
                <input
                    type="submit"
                    value="Create Account"
                    className={styles.createbut}
                />
            </form>
        </div>
    )
}

export default Login;