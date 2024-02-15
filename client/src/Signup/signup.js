import styles from './signup.module.css'
import logo from "../img/register.png"
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="Register">
            <Link className={styles.backButton} to="/">Back</Link> 
            <h1 className={styles.title}>REGISTER</h1>
            <img className={styles.img} src={logo} alt="" />

            
            <form>
                <div >
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder= "Name"
                        className={styles.username}
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
                        className={styles.username}
                    />
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder= "E-mail"
                        className={styles.username}
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder= "Password"
                        className={styles.username}
                    />
                    <input
                        type="password"
                        id="repeat password"
                        name="repeat password"
                        placeholder= "Repeat Password"
                        className={styles.username}
                    />
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
                </div>
            </form>


            <div className={styles.account}>
                <Link className={styles.accountlink} to="/login">Log in</Link> 
            </div>
        </div>
    )
}

export default Login;