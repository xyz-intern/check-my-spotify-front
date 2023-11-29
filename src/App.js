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
export const UserContext = createContext();


function App() {
  const [code, setCode] = useState(new URL(document.location.toString()).searchParams.get('code'));
  const [state, setState] = useState(new URL(document.location.toString()).searchParams.get('state'));
  const [isLoggin, setIsLoggin] = useState(false);

  const loginHandler = () => {
    setIsLoggin(true);
  };

  const logoutHandler = () => {
   setIsLoggin(false);
   setCode('')
  };


  return (
    <AppContext.Provider value={{ code, state, isLoggin }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PopularArtist />} />
          <Route path="/last/song" element={<LastStream />} />
          <Route path="/favorite/song" element={<MostStream />} />
          <Route path="/favorite/artist" element={<Artist />} />
          <Route path="/callback" element={code? <Redirection isLoggin={loginHandler} /> : <Login />} />
          <Route path="/logout" element={<Logout isLogout={logoutHandler} />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
