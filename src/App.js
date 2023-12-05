import React, { createContext, useEffect, useState } from 'react';
import Login from "./components/Login/Login";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Artist from './components/Statistics/FavoriteArtist'
import MostStream from './components/Statistics/MostStream'
import LastStream from './components/Statistics/LastStream';
import Redirection from './components/Login/Redirection'
import PopularArtist from './components/Chart/PopularArtist';
import Logout from './components/Login/Logout';
import Reissue from './components/Login/Reissue';

export const AppContext = createContext();
export const PageContext = createContext();

function App() {
  const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const [code, setCode] = useState('');
  const [state, setState] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggin, setIsLoggin] = useState(storedIsLoggedIn);
  const [error, setError] = useState([]);
  
  useEffect(() => {
    const urlParams = new URL(document.location.toString());
    const initialCode = urlParams.searchParams.get('code');
    const initialState = urlParams.searchParams.get('state');

    if(initialCode) setCode(initialCode);
    if (initialState) setState(initialState);
  }, []);

  return (
    <AppContext.Provider value={{ code, state, isLoggin, setIsLoggin, setCode }}>
      <PageContext.Provider value={{ isLoading, setIsLoading, setError, error}}>
      <BrowserRouter>
        <Reissue />
        <Routes>
          <Route path="/" element={<PopularArtist />} />
          <Route path="/last/stream" element={<LastStream />} />
          <Route path="/most/stream" element={<MostStream />} />
          <Route path="/favorite/artist" element={<Artist />} />
          <Route path="/callback" element={code ? <Redirection/> : <Login />} />
          <Route path="/logout" element={<Logout/>} />
        </Routes>
      </BrowserRouter>
      </PageContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
