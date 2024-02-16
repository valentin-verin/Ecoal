import styles from './login.module.css'
import logo from "../img/login.png"
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';


function Login() {
    const [user, setUser] = useState({email: "", password: ""});
    const navigate = useNavigate()

    function handleChange(e, field) {
        setUser({...user, [field]: e.target.value});
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const data = new FormData();
            data.append("email", user.email);
            data.append("password", user.password);
            const result = (await axios.post("http://localhost:8000/api/login", data)).data;
            window.localStorage.setItem("account", JSON.stringify(result));
            setUser({email: "", password: ""});
            navigate('/');
        } catch (e) {
            console.error("ERR", e);
        }
    }

    return (
        <div className="login">
            <div className={styles.link}>
                <Link className={styles.backButton} to="/">Back</Link> 
            </div>
            <h1 className={styles.title}>LOGIN</h1>
            <img className={styles.img} src={logo} alt="" />
            <form onSubmit={handleSubmit}>
                <div >
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder= "Email"
                        className={styles.username}
                        onChange={e => handleChange(e, "email")}
                    />
                </div>
                <div >
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder= "Password"
                        className={styles.username}
                        onChange={e => handleChange(e, "password")}
                        />
                </div>
                <button
                    type="submit"
                    className={styles.submit}
                >
                    Login
                </button>

                <div className={styles.bottomLine}></div>
              
            </form>


            <div className={styles.account}>
                <Link className={styles.accountlink} to="/signup">Sign Up</Link> 
            </div>
        </div>
    )
}

export default Login;