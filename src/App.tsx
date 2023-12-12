import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
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
import Reissue from './components/Login/Reissue'
import { createContext } from 'react';

interface LoginType {
  code: string
  state: string
  isLoggin: boolean
  setCode: Dispatch<SetStateAction<string>>
  setState: Dispatch<SetStateAction<string>>
  setIsLoggin: Dispatch<SetStateAction<boolean>>
}

interface PageType {
  error: undefined
  isLoading: boolean
  setError: Dispatch<SetStateAction<null | string>>
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

export const AppContext = createContext<LoginType | null>(null);
export const PageContext = createContext<PageType | null>(null);

function App() {
  const [login, setLogin] = useState<LoginType>({ 
    code: '', 
    state: '',
    isLoggin: false, 
    setCode: () => {},
    setState: () => {},
    setIsLoggin: () => {}
  });

  const [page, setPage] = useState<PageType>({
    error: undefined, 
    isLoading: true, 
    setError: () => {}, 
    setIsLoading: () => {}
  });

  useEffect(() => {
    const urlParams = new URL(document.location.toString());
    const initialCode = urlParams.searchParams.get('code');
    const initialState = urlParams.searchParams.get('state');

    if (initialCode) login.setCode(initialCode)
    if (initialState) login.setState(initialState)
  }, []);

  return (
    <AppContext.Provider value={login}>
      <PageContext.Provider value={page}>
        <BrowserRouter>
          <Reissue />
          <Routes>
            <Route path="/" element={<PopularArtist />} />
            <Route path="/last/stream" element={<LastStream />} />
            <Route path="/most/stream" element={<MostStream />} />
            <Route path="/favorite/artist" element={<Artist />} />
            <Route path="/callback" element={login.code ? <Redirection /> : <Login />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </BrowserRouter>
      </PageContext.Provider>
    </AppContext.Provider>
  );
}
export default App;
