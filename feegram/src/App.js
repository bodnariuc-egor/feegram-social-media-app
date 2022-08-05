import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Aside from './components/aside/Aside';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <Aside />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/profile' element={<Profile posts={props.state.profilePage.posts} addPost={props.addPost} />} />
              <Route path='/dialogs/*' element={<Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages} />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
