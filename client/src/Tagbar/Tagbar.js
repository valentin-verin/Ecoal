import React from 'react';
import styles from './tagbar.module.css';
import {Link} from 'react-router-dom';

function Tagbar(props) {

    return (
        <>
            <Link className={styles.tag}>{props.name}</Link>
        </>
    );
}

export default Tagbar;
