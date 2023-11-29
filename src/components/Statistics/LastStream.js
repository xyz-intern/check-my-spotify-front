import axios from 'axios';
import { useEffect, useState } from 'react';
import SongList from './List/SongList';
import URL from '../../store/constant/constant';
import Header from '../Header/Header';
import background from '../images/lastSong.png';
import styled from 'styled-components';
import noplay from '../images/noplay.png'
import login from '../images/nologin.png'


const Background = styled.div`
  background-image: url(${background});
  width: 100%;
  z-index: 10;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
`;

const NotLogin = styled.div`
  background-image: url(${login});
  width: 100%;
  z-index: 10;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  height: 100vh;
`;

const Null = styled.img`
  position: absolute;
  width: 550px;
  height: 370px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 25px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;

const LastStream = () => {
  const [lastSong, setLastSong] = useState([]);

  useEffect(() => {
    fetchLastSong();
  }, []);

  const fetchLastSong = () => {
    axios
      .get(URL.GET_LAST_SONG)
      .then((response) => {
        setLastSong(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {lastSong == '' ? (
        <NotLogin>
          <Header />
          <Null src={noplay} />
        </NotLogin>
      ) : (
        <Background>
          <Header />
          {lastSong.map((song) => (
            <SongList
              key={song.songId}
              id={song.songId}
              artistName={song.artistName}
              songName={song.songName}
              albumImage={song.albumImage}
              albumName={song.albumName}
              count={song.count}
            />
          ))}
        </Background>
      )}
    </>
  );
};

export default LastStream;
