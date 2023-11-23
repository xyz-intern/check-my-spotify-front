import React, { createContext, useState } from 'react';
import Login from "./components/Login/Login";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import PopularArtist from './components/Chart/PopularArtist/PopularArtist';
import Artist from './components/Statistics/FavoriteArtist/FavoriteArtist'
import FavoriteSong from './components/Statistics/FavoriteSong/FavoriteSong'
import LastSong from './components/Statistics/LastSong/LastSong';
import Header from './components/Header/Header'
import Redirection from './components/Login/Redirection'

export const AppContext = createContext();
export const UserContext = createContext();
function App() {
  const [code, setCode] = useState(new URL(document.location.toString()).searchParams.get('code'));
  const [state, setState] = useState(new URL(document.location.toString()).searchParams.get('state'));
  
  return (
    <div className="App">
      <AppContext.Provider value={code}>
        <UserContext.Provider value = {state}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/last/song" element={<LastSong />} />
            <Route path="/favorite/song" element={<FavoriteSong />} />
            <Route path="/favorite/artist" element={<Artist />} />
            <Route path="/callback" element= {code ? <Redirection /> : <Login />} />
          </Routes>
        </BrowserRouter>
        </UserContext.Provider>
      </AppContext.Provider>
      <PopularArtist /> 
    </div>
  );
}

export default App;
