import styles from './article.module.css';
import user from '../img/womanuser.png';
import articlecover from '../img/articlecover.png';

    function Article() { 

        return (
        <>
        {/* Article  */}
        <div className={styles.allCard}>
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
        </div>

        {/* Article  */}
        <div className={styles.allCard}>
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
                        <h4>Lorem ipsum dolor sit amet consectetur. Elementum non maecenas erat fusce enim in arcu vel luctus. Ullamcorper pellentesque a vitae nec tortor morbi. Nulla tellus sed mauris rutrum nec sit. Ac neque eget ultrices dapibus.</h4>
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
        </div>
        
        

        
        </>
        )
    }

export default Article;