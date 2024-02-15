import './App.css';
import Home from './Home/home';
import Research from './Research/research';
import Article from './Article/article';
import Signup from './Signup/signup';
import Login from './Login/login';
import NoMatch from './NoMatch/nomatch';
import Detailarticle from './Detailarticle/detailarticle';
import Splash from './splash/splash';
import Changename from './changename/changename';
import Profile from './Profile/profile';
import {Routes, Route, Link} from 'react-router-dom';
import addarticle from './img/addArticle.svg';
import homeimg from './img/home.svg';
import searchimg from './img/search.svg';
import loginimg from './img/login.svg';
import logoutimg from './img/logout.svg';
import addarticle from './img/addarticle.svg';



function App() {
  return (
    <>

      <nav className='navbar'>
        <div className="icon-container">
          <Link to="/" className="link">Home</Link>
        </div>
        <div className="icon-container">
          <Link to="/research" className='link'>Search</Link>
        </div>
        <div className="icon-container">
          <Link to="/addarticle" className='link'><img src={addarticle} className="icon" alt="Home" /></Link>
          <span className="icon-label">Add</span>
        </div>
        <div className="icon-container">
          <Link to="/profile" className='link'>Profile</Link>
        </div>
      </nav>

      <Routes>
        <Route exact={true} path="/" element={<Home/>}/>
        <Route exact={true} path="/:id" element={<Home/>}/>
        <Route exact={true} path="/research" element={<Research />} />
        <Route exact={true} path="/research/:id" element={<Research />} />
        <Route exact={true} path="/article" element={<Article />} />
        <Route exact={true} path="/Addarticle" element={<Detailarticle />} />
        <Route exact={true} path="/Addarticle" element={<Addarticle />} />
        <Route exact={true} path="/login" element={<Login />} />
        <Route exact={true} path="/signup" element={<Signup />} />
        <Route exact={true} path="/splash" element={<Splash />} />
        <Route exact={true} path="/changename" element={<Changename />} />
        <Route exact={true} path="/Detailarticle" element={<Detailarticle />} />
        <Route path="*" element={<NoMatch />} />
        <Route exact={true} path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
