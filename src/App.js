import React from 'react';
import Login from "./components/Login/Login";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Artist from './components/Statistics/Favorite/Artists/Artist'
import FavoriteSong from './components/Statistics/Favorite/Song/Song'
import Header from './components/Header/Header'
import LastSong from './components/Statistics/LastSong/LastSong';
import Redirection from './components/Login/Redirection'

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
    </div>
  );
}

export default App;