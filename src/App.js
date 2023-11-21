import React, { createContext ,useState } from 'react';
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

export const AppContext = createContext();
import PopularArtist from './components/Chart/PopularArtist/PopularArtist'
import PopularSong from './components/Chart/PopularSong/PopularSong'
let code = window.location.search;

function App() {

  const [items, setItem] = useState(code);

  return (
    <div className="App">
      {/* how to using: const { items, setItem } = useContext(AppContext); */}
      <AppContext.Provider value={{ items, setItem }}>
        {code ? <Redirection code={code} /> : <Login />}
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/last/song" element={<LastSong /> } />
          <Route path="/favorite/song" element={<FavoriteSong />} />
          <Route path="/favorite/artist" element={<Artist />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        </BrowserRouter>
        <PopularArtist />
        <PopularSong />
      </AppContext.Provider>
    </div>
  );
}

export default App;