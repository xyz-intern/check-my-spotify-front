import React, { createContext, useState } from 'react';
import Login from "./components/Login/Login";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Artist from './components/Statistics/FavoriteArtist/FavoriteArtist'
import FavoriteSong from './components/Statistics/FavoriteSong/FavoriteSong'
import LastSong from './components/Statistics/LastSong/LastSong';
import Header from './components/Header/Header'
import Redirection from './components/Login/Redirection'
import styled from 'styled-components';
import background from './components/images/home.png'
import PopularArtist from './components/Chart/PopularArtist/PopularArtist';

export const AppContext = createContext();
export const UserContext = createContext();

const Background = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover ;
  object-fit: cover;
`

function App() {
  const [code, setCode] = useState(new URL(document.location.toString()).searchParams.get('code'));
  const [state, setState] = useState(new URL(document.location.toString()).searchParams.get('state'));
  
  return (
    <Background>
       <AppContext.Provider value={code}>
        <UserContext.Provider value = {state}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<PopularArtist />} /> {/* 수정된 부분 */}
          <Route path="/last/song" element={<LastSong />} />
          <Route path="/favorite/song" element={<FavoriteSong />} />
          <Route path="/favorite/artist" element={<Artist />} />
          <Route path="/callback" element={code ? <Redirection /> : <Login />} />
        </Routes>
      </BrowserRouter>
      </UserContext.Provider>
      </AppContext.Provider>
    </Background>
  );
}

export default App;
