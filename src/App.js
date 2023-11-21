import React from 'react';
import Login from "./components/Login/Login";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Artist from './components/Statistics/FavoriteArtist/FavoriteArtist'
import FavoriteSong from './components/Statistics/FavoriteSong/FavoriteSong'
import Header from './components/Header/Header'
import LastSong from './components/Statistics/LastSong/LastSong';
import Redirection from './components/Login/Redirection'
import PopularArtist from './components/Chart/PopularArtist/PopularArtist'
import PopularSong from './components/Chart/PopularSong/PopularSong'
const code = window.location.search;
function App() {
  return (
    <div className="App">
      {code ? <Redirection code={code} /> : <Login />}
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/last/song" element={<LastSong /> } />
            <Route path="/favorite/song" element={<FavoriteSong />} />
            <Route path="/favorite/artist" element={<Artist />} />
            {/* <Route path="/login" element={<Login />} /> */}
          </Routes>
      </BrowserRouter> 
      <PopularArtist />
      <PopularSong />
    </div>
  );
}

export default App;