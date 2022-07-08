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

const App = () => {
  return (
    <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <Aside />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/profile' element={<Profile />} />
              <Route path='/dialogs/*' element={<Dialogs />} />
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
