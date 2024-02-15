import React from 'react';
import { Await, Link } from 'react-router-dom';
import styles from "./profile.module.css";
import arrowIcon from "../img/arrow.svg";


const account = window.localStorage.getItem('account');

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
                <Link to="/edit/username" className={styles.detail}>
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
                <Link to="/" className={styles.accountlink}>Log out</Link>
            </div>
        </div>
    );
}

export default Profile;