import React from 'react';
import { Await, Link } from 'react-router-dom';
import styles from "./profile.module.css";
import arrowIcon from "../img/arrow.svg";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const account = window.localStorage.getItem('account');

async function logout(){
    
    const navigate = useNavigate();

    try {
        const token = JSON.parse(window.localStorage.getItem("account"));
        const response = await axios.get({
            url: "http://localhost:8000/api/logout",
            headers: {Authorization: "Bearer " + token}
        })
        window.localStorage.removeItem("account");
        navigate('/');
    } catch (e) {
        console.error("ERR", e); 
    }
}




function Profile() {
    const userDetail = require('./data.json');
    const userData = userDetail[0];
    

    return (
        
        <div>
            {/* Display user image */}
            <img src={userData.userImage} alt="User" className={styles.userImage} />

            {/* Display user details */}
            <div className={styles.userInfo}>
                <Link to="/edit/nickname" className={styles.detail}>
                    <div className={styles.arrowContainer}>
                        <div className={styles.innerContainer}>
                            <span>Nickname </span>
                            <div className={styles.editButton}>{userData.nickName}</div>
                        </div>
                        <img className={styles.arrow} src={arrowIcon} alt="arrow-Icon" />
                    </div>
                </Link>
                <Link to="/changename" className={styles.detail}>
                    <div className={styles.arrowContainer}>
                        <div className={styles.innerContainer}>
                            <span>Username </span>
                            <div className={styles.editButton}>{userData.userName}</div>
                        </div>
                        <img className={styles.arrow} src={arrowIcon} alt="arrow-Icon" />
                    </div>
                </Link>

                <Link to="/edit/phonenumber" className={styles.detail}>
                    <div className={styles.arrowContainer}>
                        <div className={styles.innerContainer}>
                            <span>Phone Number </span>
                            <div className={styles.editButton}>{userData.PhoneNumber}</div>
                        </div>
                        <img className={styles.arrow} src={arrowIcon} alt="arrow-Icon" />
                    </div>
                </Link>

                <Link to="/edit/email" className={styles.detail}>
                    <div className={styles.arrowContainer}>
                        <div className={styles.innerContainer}>
                            <span>Email </span>
                            <div className={styles.editButton}>{userData.Email}</div>
                        </div>
                        <img className={styles.arrow} src={arrowIcon} alt="arrow-Icon" />
                    </div>
                </Link>

                <Link to="/edit/password" className={styles.detail}>
                    <div className={styles.arrowContainer}>
                        <div>
                            <div className={styles.editButton}>PASSWORD</div>
                        </div>
                        <img className={styles.arrow} src={arrowIcon} alt="arrow-Icon" />
                    </div>
                </Link>
            </div>
            <div className={styles.bottomLine}></div>

            <div className={styles.account}>
                <Link to="/" className={styles.accountlink}>Delete my account</Link>
                <button onClick={logout} className={styles.accountlink}>Log out</button>
            </div>
        </div>
    );
}

export default Profile;