import styles from './article.module.css';
import user from '../img/womanuser.png';
import articlecover from '../img/articlecover.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Article(props) { 

        const [articles, setArticles] = useState([]); 

        async function getArticles() { 
            const articles = (await axios.get('http://localhost:8000/api/articles')).data;
            setArticles(articles);
        }
    
        useEffect(() => { 
            getArticles();
        }, []);
    
        return (
        <>
        {articles.map((article, index) => (
            // <Link
            //     key={index}
            //     to={props.page === "home" ? `/${article.title}` : props.page === "research" ? `/research/${article.title}` : null}
            // >
            //     {article.title}
            // </Link>

            <Link to="/detailArticle" className={styles.Allcard}>
            <div className={styles.card}>

                <div className={styles.usersave}>
                    <div className={styles.user}>
                        <img src={user} />
                        <h3>@username - </h3> <h3 className={styles.h3grey}>10-02-2024</h3>
                    </div>
                    <div className={styles.save}>
                        <button>SAVE</button>
                    </div>
                </div>

                <div className={styles.descriptionimg}>
                    <div className={styles.description}>
                        <h3>{article.title}</h3>
                        <h4>{article.content}</h4>
                        <div className={styles.genre}>
                      
                        {article.tags.map( (tag, index) => (<>
                            <h5>{tag.name}</h5>
                            </>
                        ))}


                        <h5 className={styles.h3grey}>5 MIN TO READ</h5>




                        </div>
                    </div>
                    <div className={styles.imgdescription}>
                        <img src={articlecover}/>
                    </div>
                </div>

            </div>
            </Link>
        ))}

        <div className={styles.bottomLine}></div>
      
        </>
        )
    }

export default Article;