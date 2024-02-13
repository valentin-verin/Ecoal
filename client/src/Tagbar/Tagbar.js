import React, { useState } from 'react';
import styles from './tagbar.module.css';
import { Link } from 'react-router-dom';

function Tagbar(props) {
    const [usingTag, setUsingTag] = useState("All"); 

    const changeBackgroundColor = (tagName) => {
        setUsingTag(tagName); 
    };

    return (
        <>
            {props.name.map((tag, index) => (
                <Link
                    key={index}
                    to={`/${tag}`}
                    className={usingTag === tag ? styles.tag : styles.notclickedtag}
                    onClick={() => changeBackgroundColor(tag)}
                >
                    {tag}
                </Link>
            ))}

        </>
    );
}

export default Tagbar;