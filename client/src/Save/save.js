import styles from './save.module.css';
import Article from '../Article/article';

function Save() {

    return (
        <>
            <div className={styles.padding}>
                <h1 className={styles.titleDetail}>Save</h1>
            </div>
            <Article />
        </>
    )
}
export default Save;