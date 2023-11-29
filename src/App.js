import React, { createContext, useEffect, useState } from 'react';
import Login from "./components/Login/Login";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Artist from './components/Statistics/FavoriteArtist'
import MostStream from './components/Statistics/MostStream'
import LastStream from './components/Statistics/LastStream';
import Redirection from './components/Login/Redirection'
import PopularArtist from './components/Chart/PopularArtist';
import Logout from './components/Login/Logout';

export const AppContext = createContext();

function App() {
  const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const [code, setCode] = useState('');
  const [state, setState] = useState('');
  const [isLoggin, setIsLoggin] = useState(storedIsLoggedIn);

  useEffect(() => {
    const urlParams = new URL(document.location.toString());
    const initialCode = urlParams.searchParams.get('code');
    const initialState = urlParams.searchParams.get('state');

    if(initialCode) setCode(initialCode);
    if (initialState) setState(initialState);
  }, []);

  const loginHandler = () => {
    setIsLoggin(true);
    localStorage.setItem('isLoggedIn', 'true'); // 로그인 상태 유지
  };

  const logoutHandler = () => {
   setIsLoggin(false);
   setCode('');
   localStorage.removeItem('isLoggedIn');
  };

  return (
    <AppContext.Provider value={{ code, state, isLoggin, loginHandler, logoutHandler }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PopularArtist />} />
          <Route path="/last/song" element={<LastStream />} />
          <Route path="/favorite/song" element={<MostStream />} />
          <Route path="/favorite/artist" element={<Artist />} />
          <Route path="/callback" element={code ? <Redirection isLoggin = {loginHandler} /> : <Login />} />
          <Route path="/logout" element={<Logout isLogout={logoutHandler}/>} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
