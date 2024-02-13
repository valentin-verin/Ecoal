import styles from './article.module.css'

    function Article() { 

        return (
        <>
        <div className={styles.allCard}>
            <div className={styles.card}>
                <h1>Article 1</h1>
            </div>
            <div className={styles.card}>
                <h1>Article 2</h1>
            </div>
            <div className={styles.card}>
                <h1>Article 3</h1>
            </div>
            <div className={styles.card}>
                <h1>Article 4</h1>
            </div>
        </div>
        </>
        )
    }

export default Article;