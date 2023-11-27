import React, { createContext, useState } from 'react';
import Login from "./components/Login/Login";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Artist from './components/Statistics/FavoriteArtist'
import MostStream from './components/Statistics/MostStream'
import LastStream from './components/Statistics/LastStream';
import Redirection from './components/Login/Redirection'
import styled from 'styled-components';
import background from './components/images/home.png'
import PopularArtist from './components/Chart/PopularArtist';

export const AppContext = createContext();
export const UserContext = createContext();

// const Background = styled.div`
//   background-image: url(${background});
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
//   object-fit: cover;
//   height: 100%;
// `

function App() {
  const [code, setCode] = useState(new URL(document.location.toString()).searchParams.get('code'));
  const [state, setState] = useState(new URL(document.location.toString()).searchParams.get('state'));

  return (
    // <Background>
      <AppContext.Provider value={code}>
        <UserContext.Provider value={state}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PopularArtist />} /> 
              <Route path="/last/song" element={<LastStream />} />
              <Route path="/favorite/song" element={<MostStream />} />
              <Route path="/favorite/artist" element={<Artist />} />
              <Route path="/callback" element={code ? <Redirection /> : <Login />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </AppContext.Provider>
    // </Background>
  );
}

export default App;
