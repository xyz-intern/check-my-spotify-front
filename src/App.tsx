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
import { GlobalStyle } from './globalStyle';

interface LoginType {
  code: string | null
  state: string | null
  isLoggin: boolean
  setCode: Dispatch<SetStateAction<string | null>>
  setState: Dispatch<SetStateAction<string | null>>
  setIsLoggin: Dispatch<SetStateAction<boolean>>
}

interface PageType {
  error: string | null
  isLoading: boolean
  setError: Dispatch<SetStateAction<string | null>>
  setIsLoading: Dispatch<SetStateAction<boolean>>
  loadingPage: boolean
  setLoadingPage: Dispatch<SetStateAction<boolean>>
}

export const AppContext = createContext<LoginType | undefined>(undefined);
export const PageContext = createContext<PageType | undefined>(undefined);

function App() {
  const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const [login, setLogin]: any = useState<LoginType>({
    code: null,
    state: null,
    isLoggin: storedIsLoggedIn,
    setCode: (newCode) => setLogin((prevLogin: LoginType) => ({ ...prevLogin, code: newCode })),
    setState: (newState) => setLogin((prevLogin: LoginType) => ({ ...prevLogin, state: newState })),
    setIsLoggin: (newIsLoggin) => setLogin((prevLogin: LoginType) => ({ ...prevLogin, isLoggin: newIsLoggin })),
  });

  const [page, setPage]: any = useState<PageType>({
    error: null, 
    isLoading: true, 
    setError: (code) => setPage((prevPage: PageType) => ({...prevPage, error: code})), 
    setIsLoading: (code) => setPage((prevPage: PageType) => ({...prevPage, isLoading: code})),
    loadingPage: true,
    setLoadingPage: ((code) => setPage((prevPage: PageType) => ({...prevPage, loadingPage: code})))
  });

  useEffect(() => {
    const urlParams = new URL(document.location.toString());
    const initialCode = urlParams.searchParams.get('code');
    const initialState = urlParams.searchParams.get('state');

    if (initialCode) login.setCode(initialCode);
    if (initialState) login.setState(initialState)
  }, []);

  return (
    <>
    <AppContext.Provider value={login}>
      <PageContext.Provider value={page}>
        <GlobalStyle />
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
    </>
  );
}
export default App;