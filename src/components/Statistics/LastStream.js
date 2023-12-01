import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import SongList from './List/SongList';
import URL from '../../store/constant/constant';
import Header from '../Header/Header';
import background from '../images/lastSong.png';
import styled from 'styled-components';
import noplay from '../images/noplay.png'
import login from '../images/nologin.png'
import * as t from '../../store/style-components/GlobalStyle'
import { AppContext } from '../../App';


const LastStream = () => {
  const appContext = useContext(AppContext);
  const [lastSong, setLastSong] = useState([]);

  useEffect(() => {
    fetchLastSong();
  }, []);

  const fetchLastSong = () => {
    appContext.setIsLoading(true);
    axios
      .get(URL.GET_LAST_SONG)
      .then((response) => {
        setLastSong(response.data);
        appContext.setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        appContext.setIsLoading(false);
      });
  };


  return (
    <>
      {appContext.isLoading && lastSong == '' ? (
        <t.Background background={true}>
          <Header />
          <t.Container>
            <t.Loading>Loading ...</t.Loading>
          </t.Container>
        </t.Background>
      ) : (
        <>
          {lastSong.length === 0 ? (
            <t.LoginBackground>
              <Header />
              <t.Play src={noplay} />
            </t.LoginBackground>
          ) : (
            <t.Background background={true}>
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
            </t.Background>
          )}
        </>
      )}
    </>
  );
};

export default LastStream;
