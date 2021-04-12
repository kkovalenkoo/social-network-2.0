import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Header} from './components/Header/Header';
import {Route} from 'react-router-dom';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {UsersContainer} from './components/Users/UsersContainer';
import {ProfileContainer} from './components/Profile/ProfileContainer';


export function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route exact path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route exact path='/users' render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
}
