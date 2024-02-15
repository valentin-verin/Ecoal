import styles from './login.module.css'
import logo from "../img/login.png"
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="login">
            <Link className={styles.backButton} to="/">Back</Link> 
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
                        className={styles.username}
                    />
                </div>
                <div className={styles.bottomLine}></div>
                <div >
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        value="Envoyer"
                        className={styles.submit}
                    />
                </div>
            </form>


            <div className={styles.account}>
                <Link className={styles.accountlink} to="/signup">Sign Up</Link> 
            </div>
        </div>
    )
}

export default Login;