import styles from './signup.module.css'
import logo from "../img/register.png"

function Login() {
    return (
        <div className="Register">
            <button className={styles.back}>
                BACK
            </button>
            <h1 className={styles.title}>REGISTER</h1>
            <img className={styles.img} src={logo} alt="" />
            <form>
                <div >
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder= "Name"
                        className={styles.name}
                    />
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder= "Username"
                        className={styles.username}
                    />
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder= "Mobile Phone"
                        className={styles.phone}
                    />
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder= "E-mail"
                        className={styles.email}
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
                    <input
                        type="password"
                        id="repeat password"
                        name="repeat password"
                        placeholder= "Repeat Password"
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