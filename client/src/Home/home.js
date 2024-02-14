import styles from './home.module.css'
import Article from '../Article/article';
import Tagbar from '../Tagbar/Tagbar';
import { Link } from 'react-router-dom';


    function Home(props) { 

        return (
        <>
        {/* Melody Matters */}
        <div className={styles.melodymatters}>

            <svg width="359" height="60" viewBox="0 0 359 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.melody}>
                <path d="M11.2444 58.8875H0V0.583042H12.827L31.4011 44.2281L49.9753 0.583042H62.8022V58.8875H51.5578V21.2395L35.8156 58.8875H26.9866L11.2444 21.2395V58.8875Z" fill="#1A1A1A"/>
                <path d="M113.415 9.99505H83.6793V24.821H105.918V33.8999H83.6793V49.4755H113.415V58.8875H72.4348V0.583042H113.415V9.99505Z" fill="#1A1A1A"/>
                <path d="M132.688 0.583042V49.4755H158.675V58.8875H121.444V0.583042H132.688Z" fill="#1A1A1A"/>
                <path d="M188.571 59.4706C184.462 59.4706 180.603 58.7487 176.994 57.305C173.384 55.8612 170.219 53.8345 167.498 51.2246C164.833 48.5593 162.723 45.422 161.168 41.8126C159.613 38.1478 158.836 34.122 158.836 29.7353C158.836 25.3486 159.613 21.3505 161.168 17.7412C162.723 14.1319 164.833 10.9946 167.498 8.32921C170.219 5.66386 173.384 3.60932 176.994 2.16559C180.603 0.721864 184.462 0 188.571 0C192.736 0 196.595 0.721864 200.149 2.16559C203.758 3.60932 206.923 5.66386 209.644 8.32921C212.365 10.9946 214.475 14.1319 215.974 17.7412C217.529 21.3505 218.307 25.3486 218.307 29.7353C218.307 34.122 217.529 38.1478 215.974 41.8126C214.475 45.422 212.365 48.5593 209.644 51.2246C206.923 53.8345 203.758 55.8612 200.149 57.305C196.595 58.7487 192.736 59.4706 188.571 59.4706ZM188.655 49.892C192.153 49.892 195.263 49.0591 197.983 47.3932C200.76 45.6718 202.925 43.3119 204.48 40.3134C206.09 37.3149 206.896 33.7888 206.896 29.7353C206.896 25.6817 206.09 22.1557 204.48 19.1572C202.925 16.1587 200.76 13.8265 197.983 12.1606C195.263 10.4393 192.153 9.57859 188.655 9.57859C185.045 9.57859 181.852 10.4393 179.076 12.1606C176.355 13.8265 174.217 16.1587 172.663 19.1572C171.108 22.1557 170.33 25.6817 170.33 29.7353C170.33 33.7333 171.108 37.2593 172.663 40.3134C174.217 43.3674 176.355 45.7274 179.076 47.3932C181.852 49.0591 185.045 49.892 188.655 49.892Z" fill="#1A1A1A"/>
                <path d="M246.813 0.583042C253.033 0.583042 258.419 1.80466 262.972 4.2479C267.581 6.6356 271.162 10.0228 273.717 14.4095C276.271 18.7963 277.548 23.9604 277.548 29.9019C277.548 35.7878 276.271 40.8964 273.717 45.2276C271.162 49.5588 267.581 52.9183 262.972 55.306C258.419 57.6937 253.033 58.8875 246.813 58.8875H225.074V0.583042H246.813ZM246.48 49.4755C252.755 49.4755 257.586 47.7541 260.973 44.3114C264.36 40.8131 266.054 36.01 266.054 29.9019C266.054 23.7382 264.36 18.8795 260.973 15.3257C257.586 11.772 252.755 9.99505 246.48 9.99505H236.319V49.4755H246.48Z" fill="#1A1A1A"/>
                <path d="M284.413 0.583042H295.658V58.8875H284.413V0.583042Z" fill="#1A1A1A"/>
                <path d="M302.528 29.7353C302.528 25.3486 303.278 21.3505 304.777 17.7412C306.276 14.0764 308.358 10.939 311.024 8.32921C313.689 5.66386 316.799 3.60932 320.352 2.16559C323.962 0.721864 327.849 0 332.013 0C338.01 0 343.313 1.44373 347.922 4.33119C352.587 7.16312 356.085 11.2444 358.417 16.5751L349.005 19.3238C347.783 16.9916 346.256 15.1036 344.424 13.6599C342.647 12.2162 340.704 11.1611 338.593 10.4948C336.483 9.82847 334.346 9.4953 332.18 9.4953C328.626 9.4953 325.461 10.356 322.685 12.0774C319.908 13.7432 317.743 16.1031 316.188 19.1572C314.689 22.2112 313.939 25.7373 313.939 29.7353C313.939 33.7333 314.689 37.2593 316.188 40.3134C317.743 43.3119 319.908 45.6718 322.685 47.3932C325.461 49.1146 328.626 49.9753 332.18 49.9753C334.401 49.9753 336.594 49.6421 338.76 48.9758C340.981 48.2539 343.036 47.06 344.924 45.3942C346.812 43.7284 348.422 41.5072 349.755 38.7308L359 41.3129C356.612 47.3654 353.059 51.9187 348.339 54.9728C343.619 57.9713 338.177 59.4706 332.013 59.4706C327.849 59.4706 323.962 58.7487 320.352 57.305C316.799 55.8612 313.689 53.8067 311.024 51.1414C308.358 48.476 306.276 45.3387 304.777 41.7293C303.278 38.0645 302.528 34.0665 302.528 29.7353Z" fill="#1A1A1A"/>
            </svg> 

            <svg width="359" height="59" viewBox="0 0 359 59" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.melody}> 
                <path d="M10.8793 57.7656H0V1.35445H12.4104L30.3814 43.5822L48.3524 1.35445H60.7628V57.7656H49.8835V21.3401L34.6525 57.7656H26.1103L10.8793 21.3401V57.7656Z" fill="#1A1A1A"/>
                <path d="M95.8705 10.4608H92.9694L76.3684 57.7656H65.1668L85.3942 1.35445H103.365L123.593 57.7656H112.391L95.8705 10.4608ZM77.4161 35.6846H110.296V44.791H77.4161V35.6846Z" fill="#1A1A1A"/>
                <path d="M119.561 1.35445H165.334V10.4608H147.927V57.7656H137.048V10.4608H119.561V1.35445Z" fill="#1A1A1A"/>
                <path d="M169.103 1.35445H214.877V10.4608H197.47V57.7656H186.59V10.4608H169.103V1.35445Z" fill="#1A1A1A"/>
                <path d="M261.034 10.4608H232.265V24.8054H253.781V33.5894H232.265V48.6592H261.034V57.7656H221.385V1.35445H261.034V10.4608Z" fill="#1A1A1A"/>
                <path d="M301.118 18.7613C301.118 16.2362 300.339 14.2216 298.781 12.7173C297.277 11.213 294.913 10.4608 291.689 10.4608H279.682V27.1424H291.689C293.838 27.1424 295.611 26.82 297.008 26.1753C298.405 25.4769 299.426 24.5099 300.071 23.2742C300.769 21.9848 301.118 20.4805 301.118 18.7613ZM292.012 1.35445C296.578 1.35445 300.339 2.16033 303.294 3.77207C306.303 5.33009 308.532 7.45223 309.983 10.1385C311.487 12.771 312.239 15.6453 312.239 18.7613C312.239 20.8566 311.863 22.9518 311.111 25.0471C310.359 27.0887 309.177 28.969 307.565 30.6882C305.953 32.3537 303.858 33.6968 301.279 34.7176C298.754 35.7384 295.665 36.2488 292.012 36.2488H279.682V57.7656H268.803V1.35445H292.012ZM298.136 32.6223L313.367 57.7656H301.199L286.612 32.6223H298.136Z" fill="#1A1A1A"/>
                <path d="M327.974 41.8093C328.243 43.3136 328.834 44.6298 329.747 45.7581C330.66 46.8863 331.842 47.7727 333.293 48.4174C334.797 49.0084 336.543 49.3039 338.531 49.3039C341.647 49.3039 343.984 48.6055 345.542 47.2086C347.1 45.7581 347.879 44.012 347.879 41.9704C347.879 40.3587 347.395 39.0156 346.428 37.9411C345.461 36.8666 344.091 35.9533 342.318 35.2011C340.599 34.449 338.585 33.7237 336.274 33.0253C334.125 32.3806 332.003 31.6821 329.908 30.93C327.813 30.1778 325.905 29.2377 324.186 28.1094C322.467 26.9812 321.097 25.5306 320.076 23.7577C319.109 21.9311 318.626 19.6478 318.626 16.9078C318.626 13.4694 319.459 10.5414 321.124 8.12378C322.843 5.70617 325.18 3.87952 328.135 2.64385C331.09 1.40818 334.501 0.790344 338.37 0.790344C341.647 0.790344 344.602 1.27387 347.234 2.24092C349.867 3.15424 352.069 4.52422 353.842 6.35087C355.669 8.12379 357.012 10.3265 357.872 12.959L347.798 15.699C347.53 14.517 346.939 13.4963 346.025 12.6367C345.112 11.7771 344.011 11.1055 342.721 10.622C341.432 10.0847 340.035 9.81612 338.531 9.81612C336.919 9.7624 335.442 10.0042 334.099 10.5414C332.755 11.0787 331.681 11.8577 330.875 12.8784C330.069 13.8992 329.666 15.0812 329.666 16.4243C329.666 17.9286 330.123 19.1374 331.036 20.0507C331.95 20.9103 333.158 21.6625 334.663 22.3071C336.167 22.8981 337.859 23.4891 339.74 24.0801C341.996 24.7248 344.253 25.4769 346.509 26.3365C348.765 27.1424 350.834 28.19 352.714 29.4794C354.595 30.7151 356.099 32.3 357.227 34.2341C358.409 36.1682 359 38.6126 359 41.5675C359 44.6836 358.248 47.5041 356.744 50.0292C355.293 52.5542 353.09 54.5689 350.135 56.0732C347.181 57.5775 343.474 58.3297 339.014 58.3297C335.361 58.3297 332.03 57.7924 329.022 56.7179C326.067 55.6434 323.622 54.0854 321.688 52.0439C319.754 49.9486 318.491 47.4772 317.9 44.6298L327.974 41.8093Z" fill="#1A1A1A"/>
            </svg> 

        </div>

        {/* All the tags */}

        <div className={styles.Alltags}>
            <div className={styles.tagcontainer}>
                <Tagbar page={"home"}/>
            </div>
        </div>

        <div className={styles.padding}>
            <h1 className={styles.title}>All</h1>
        </div> 

        <div className={styles.articles}>         
            <Article />
        </div>

        </>
        )
    }

export default Home;