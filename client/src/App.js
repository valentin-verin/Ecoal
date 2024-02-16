import logo from './logo.svg';
import './App.css';
import Home from './Home/home';
import Research from './Research/research';
import Article from './Article/article';
import Register from './Signup/signup';
import Login from './Login/login';
import NoMatch from './NoMatch/nomatch';
import Detailarticle from './Detailarticle/detailarticle';
import Splash from './splash/splash';
import Changename from './changename/changename';
import Profile from './Profile/profile';
import Save from './Save/save';
import {Routes, Route, Link} from 'react-router-dom';
import homeimg from './img/home.svg';
import searchimg from './img/search.svg';
import loginimg from './img/login.svg';
import logoutimg from './img/logout.svg';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


function App() {
  const location = useLocation();

  let account = JSON.parse(window.localStorage.getItem('account'))

  return (

    <>

      <nav className='navbar'>
          <div className={ `${location.pathname === '/' ? 'usingpage' : 'icon-container'}`}>
              <Link to="/" className="link">Home</Link>
          </div>
          <div className={`${location.pathname === '/research' ? 'usingpage' : 'icon-container'}`}>
              <Link to="/research" className='link'>Search</Link>
          </div>
          <div className={`${location.pathname === '/saved' ? 'usingpage' : 'icon-container'}`}>
              <Link to="/saved" className='link'>Saved</Link>
          </div>

          {account ?
          <div className={`${location.pathname === '/profile' ? 'usingpage' : 'icon-container'}`}>
              <Link to="/profile" className='link'>Profile</Link>
          </div> : <div className={`${location.pathname === '/login' ? 'usingpage' : 'icon-container'}`}>
              <Link to="/login" className='link'>Login</Link>
          </div>}
      </nav>

      <Routes>
        <Route exact={true} path="/" element={<Home/>}/>
        <Route exact={true} path="/:id" element={<Home/>}/>
        <Route exact={true} path="/research" element={<Research />} />
        <Route exact={true} path="/research/:id" element={<Research />} />
        <Route exact={true} path="/article" element={<Article />} />
        <Route exact={true} path="/Addarticle" element={<Detailarticle />} /> 
        <Route exact={true} path="/login" element={<Login />}/>
        <Route exact={true} path="/signup" element={<Register />} />
        <Route exact={true} path="/saved" element={<Save />} />
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
