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
  code: string
  state: string
  isLoggin: boolean
  setCode: Dispatch<SetStateAction<null | string>>
  setState: Dispatch<SetStateAction<null | string>>
  setIsLoggin: Dispatch<SetStateAction<boolean>>
}

interface PageType {
  error: undefined
  isLoading: boolean
  setError: Dispatch<SetStateAction< null | string>>
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

export const AppContext = createContext<LoginType | undefined>(undefined);
export const PageContext = createContext<PageType | undefined>(undefined);

function App() {
  const [login, setLogin] : any = useState<LoginType>({
    code: '',
    state: '',
    isLoggin: false,
    setCode: (newCode) => setLogin((prevLogin: LoginType) => ({ ...prevLogin, code: newCode })),
    setState: (newState) => setLogin((prevLogin: LoginType) => ({ ...prevLogin, state: newState })),
    setIsLoggin: (newIsLoggin) => setLogin((prevLogin: LoginType) => ({ ...prevLogin, isLoggin: newIsLoggin })),
});

  const [page, setPage] : any= useState<PageType>({
    error: undefined, 
    isLoading: true, 
    setError: (newCode) => setPage((prevPage: PageType) => ({...prevPage, error: newCode})), 
    setIsLoading: (newCode) => setPage((prevPage: PageType) => ({...prevPage, isLoading: newCode}))
  });

  useEffect(() => {
    const urlParams = new URL(document.location.toString());
    const initialCode = urlParams.searchParams.get('code');
    const initialState = urlParams.searchParams.get('state');

    if (initialCode) login.setCode(initialCode);
    
    if (initialState) login.setState(initialState)
  }, []);

  return (
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
  );
}
export default App;
