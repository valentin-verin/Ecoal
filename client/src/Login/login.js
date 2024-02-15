import styles from './login.module.css'
import logo from "../img/login.png"

function Login() {
    return (
        <div className="login">
            <button className={styles.back}>
                BACK
            </button>
            <h1 className={styles.title}>LOGIN</h1>
            <img className={styles.img} src={logo} alt="" />
            <form>
                <div >
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder= "Username"
                        className={styles.username}
                    />
                </div>
                <div >
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder= "Password"
                        className={styles.password}
                    />
                </div>
                <input
                    type="submit"
                    value="Log In"
                    className={styles.loginbut}
                />
            </form>
            {/* <a className="link" href="/signup">Sign Up</a> */}
        </div>
    )
}

export default Login;