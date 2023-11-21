import React, { createContext ,useState } from 'react';
import Login from "./components/Login/Login";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Artist from './components/Statistics/Favorite/Artists/Artist'
import FavoriteSong from './components/Statistics/Favorite/Song/Song'
import LastSong from './components/Statistics/LastSong/LastSong';
import Header from './components/Header/Header'
import Redirection from './components/Login/Redirection'

export const AppContext = createContext();

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
      </AppContext.Provider>

    </div>
  );
}

export default App;