import styles from './article.module.css';
import user from '../img/womanuser.png';
import articlecover from '../img/articlecover.png';
import { Link } from 'react-router-dom';

    function Article() { 

        return (
        <>
        {/* Article  */}
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
                        <h3>THE BEST OF JAZZ MUSIC 2024</h3>
                        <h4>Lorem ipsum dolor sit amet consectetur. Elementum non maecenas erat fusce enim in arcu vel luctus. </h4>
                        <div className={styles.genre}>
                            <h5>JAZZ</h5>
                            <h5 className={styles.h3grey}>5 MIN TO READ</h5>
                        </div>
                    </div>
                    <div className={styles.imgdescription}>
                        <img src={articlecover}/>
                    </div>
                </div>

            </div>
        </Link>
        
        {/* Article  */}
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
                        <h3>THE BEST OF JAZZ MUSIC 2024</h3>
                        <h4>Lorem ipsum dolor sit amet consectetur. Elementum non maecenas erat fusce enim in arcu vel luctus. </h4>
                        <div className={styles.genre}>
                            <h5>JAZZ</h5>
                            <h5 className={styles.h3grey}>5 MIN TO READ</h5>
                        </div>
                    </div>
                    <div className={styles.imgdescription}>
                        <img src={articlecover}/>
                    </div>
                </div>

            </div>
        </Link>

        <div className={styles.bottomLine}></div>
      
        </>
        )
    }

export default Article;