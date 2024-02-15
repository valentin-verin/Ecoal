import React, { useEffect, useState } from 'react';
import styles from './tagbar.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Tagbar(props) {
    const [usingTag, setUsingTag] = useState("All"); 
    const [tags, setTags] = useState([]); 

    const changeBackgroundColor = (tagName) => {
        setUsingTag(tagName); 
    };

    async function getTags() { 
        const tags = (await axios.get('http://localhost:8000/api/tags')).data;
        setTags(tags);
    }

    useEffect(() => { 
        getTags();
    }, []);

    return (
        <>
            {tags.map((tag, index) => (
                <Link
                    key={index}
                    to={props.page === "home" ? `/${tag.name}` : props.page === "research" ? `/research/${tag.name}` : null}
                    className={usingTag === tag.name ? styles.tag : styles.notclickedtag}
                    onClick={() => changeBackgroundColor(tag.name)}
                >
                    {tag.name}
                </Link>
            ))}
        </>
    );
}

export default Tagbar;