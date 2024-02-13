import styles from './research.module.css'
import Tagbar from '../Tagbar/Tagbar';
import Article from '../Article/article';

function Research(props) {

    return (
        <>
            <div className={styles.inputContainer}>
                <input className={styles.searchInput} type="text" placeholder='SEARCH' />
            </div>
            <div className={styles.Alltags}>
                <div className={styles.tagcontainer}>
                    <Tagbar page={"research"} />
                </div>
            </div>

            <div className={styles.padding}>
                <h1 className={styles.title}>All</h1>
            </div> 


            <Article />
        </>
    )
}

export default Research;