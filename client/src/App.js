import './App.css';
import Home from './Home/home';
import Research from './Research/research';
import Article from './Article/article';
import Signup from './Signup/signup';
import Login from './Login/login';
import NoMatch from './NoMatch/nomatch';
import Detailarticle from './Detailarticle/detailarticle';
import {Routes, Route, Link} from 'react-router-dom';
import homeimg from './img/home.svg';
import searchimg from './img/search.svg';
import loginimg from './img/login.svg';
import logoutimg from './img/logout.svg';

function App() {
  return (
    <>

      <nav className='navbar'>
        <div className="icon-container">
          <Link to="/" className="link"><img src={homeimg} className="icon" alt="Home" /></Link>
          <span className="icon-label">Home</span>
        </div>
        <div className="icon-container">
          <Link to="/research" className='link'><img src={searchimg} className="icon" alt="Home" /></Link>
          <span className="icon-label">Search</span>
        </div>
        <div className="icon-container">
          <Link to="/login" className='link'><img src={loginimg} className="icon" alt="Home" /></Link>
          <span className="icon-label">Log in</span>
        </div>
        <div className="icon-container">
          <Link to="/signup" className='link'><img src={logoutimg} className="icon" alt="Home" /></Link>
          <span className="icon-label">Log out</span>
        </div>
      </nav>

      <Routes>
        <Route exact={true} path="/" element={<Home/>}/>
        <Route exact={true} path="/:id" element={<Home/>}/>
        <Route exact={true} path="/research" element={<Research />} />
        <Route exact={true} path="/research/:id" element={<Research />} />
        <Route exact={true} path="/article" element={<Article />} />
        <Route exact={true} path="/login" element={<Login />} />
        <Route exact={true} path="/signup" element={<Signup />} />
        <Route exact={true} path="/Detailarticle" element={<Detailarticle />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
