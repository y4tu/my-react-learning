import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route, Redirect} from 'react-router-dom';
import NavbarContainer from "./components/Navbar/Navbar-container";

const App = () => {
    return (
            <div className="app-wrapper">
                <Header/>
                <NavbarContainer/>
                <div className="app-content-wrapper">
                    <Route path='/profile' render={() => <Profile/>}/>
                    <Route path='/dialogs' render={() => <Dialogs/>}/>
                    <Route path='/news' render={News}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/settings' render={Settings}/>
                    <Redirect from='/' to='/profile'/>
                </div>
            </div>
    );
};

export default App;
