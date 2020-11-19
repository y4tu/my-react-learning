import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-content-wrapper">
                    <Route path='/profile' render={() => <Profile state={props.state.ProfilePage}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.DialogsPage}/>}/>
                    <Route path='/news' render={News}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/settings' render={Settings}/>
                    <Redirect from='/' to='/profile'/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
