import styles from './detailarticle.module.css'
import { useNavigate } from 'react-router-dom';
import userimage from '../img/womanuser.png';
import articleCover from '../img/articlecover.png';


function Addarticle() {
    const navigate = useNavigate();
    const clickedOnBack = () => {
        navigate("/All")
    }

    
    return (
        <>
        <div className={styles.padding}>
            <button onClick={clickedOnBack} className={styles.backButton}>Back</button>
            <h1 className={styles.titleDetail}>The best of jazz music 2024</h1>
        </div>
            <div className={styles.bigContainer}>
            <div className={styles.blogUserContainer}>

                <div>
                    <img src={userimage} alt="user-image" />
                </div>

                <div className={styles.secondContainer}>
                    <h2>@USERNAME</h2>
                    <div className={styles.lastContainer}>
                        <h3>JAZZ</h3>
                        <span><h5>5 min to read</h5></span>
                    </div>
                </div>
            </div>

                <div className={styles.mainContainer}>
                    <img className={styles.articleCover} src={articleCover} alt="musician-image"/>
                    <p>Vitae ipsum dolor sit amet consectetur. Elementum non maecenas erat fusce enim in arcu vel luctus. Ullamcorper pellentesque a vitae nec tortor morbi. Nulla tellus sed mauris rutrum nec sit. Ac neque eget ultrices dapibus.Vitae ipsum dolor sit amet consectetur. Elementum non maecenas erat fusce enim in arcu vel luctus. Ullamcorper pellentesque a vitae nec tortor morbi. Nulla tellus sed mauris rutrum nec sit. Ac neque eget ultrices dapibus.Vitae ipsum dolor sit amet </p>
                </div>
            </div>
            <></>
        </>
    )
}

export default Addarticle;