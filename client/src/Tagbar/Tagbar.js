import React, { useState } from 'react';
import styles from './tagbar.module.css';
import { Link } from 'react-router-dom';

function Tagbar(props) {
    const [usingTag, setUsingTag] = useState("All"); 

    const changeBackgroundColor = (tagName) => {
        setUsingTag(tagName); 
    };

    const tags = ['All', 'RNB', 'TECHNO', 'JAZZ', 'ROCK', 'RAP']

    return (
        <>
            {tags.map((tag, index) => (
                <Link
                    key={index}
                    to={props.page === "home" ? `/${tag}` : props.page === "research" ? `/research/${tag}` : null}
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