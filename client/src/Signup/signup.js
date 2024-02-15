import styles from './signup.module.css'
import logo from "../img/register.png"
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Register() {
    const [user, setUser] = useState({name: "", password1: "", password2: "", email: "" });
    const navigate = useNavigate()

    function handleChange(e, field) {
        setUser({...user, [field]: e.target.value});
    }

    async function handleSubmit(e) {
    
        e.preventDefault();
        try {
            const data = new FormData();
            data.append("name", user.name);
            data.append("email", user.email);
            data.append("password", user.password1);
            const result = (await axios.post("http://localhost:8000/api/register", data)).data;
            console.log(result)
            window.localStorage.setItem("account", JSON.stringify(result));
            setUser({name: "", email: "", password1: "", password2: ""});
            navigate('/');
        } catch (e) {
            console.error("ERR", e);
        }
    }

    return (
        <div className="Register">
            <button className={styles.back}>
                BACK
            </button>
            <h1 className={styles.title}>REGISTER</h1>
            <img className={styles.img} src={logo} alt="" />
            
            <form onSubmit={handleSubmit}>
                <div >
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder= "Name"
                        className={styles.name}
                        onChange={e => handleChange(e, "name")}
                    />
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder= "E-mail"
                        className={styles.email}
                        onChange={e => handleChange(e, "email")}
                    />
                </div>
                <div >
                    <input
                        type="password"
                        id="password"
                        name="password1"
                        placeholder= "Password"
                        className={styles.password}
                        onChange={e => handleChange(e, "password1")}
                    />
                    <input
                        type="password"
                        id="repeat password"
                        name="password2"
                        placeholder= "Repeat Password"
                        className={styles.password}
                        onChange={e => handleChange(e, "password2")}
                    />
                </div>
                <button
                    type="submit"
                >
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default Register;