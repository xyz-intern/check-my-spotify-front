import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import SongList from './List/SongList';
import URL from '../../store/constant/constant';
import Header from '../Header/Header';
import noplay from '../images/noplay.png'
import * as t from '../../store/style-components/GlobalStyle'
import { AppContext } from '../../App';
import errorHandler from '../../store/error/ErrorHandler'

const LastStream = () => {
  const appContext = useContext(AppContext);
  const [lastSong, setLastSong] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetchLastSong();
    }, 1000)
  }, []);

  const fetchLastSong = () => {
    appContext.setIsLoading(true);
    appContext.setError(null);
    axios
      .get(URL.GET_LAST_SONG)
      .then((response) => {
        setLastSong(response.data);
        appContext.setIsLoading(false);
      })
      .catch((error) => {
        appContext.setError(errorHandler.handleError(error));
        // appContext.setError(errorMessage);
        appContext.setIsLoading(false);
      });
  };

  let content = '';
  if (appContext.error) {
    content = <p>{appContext.error}</p>;
  }

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
          {appContext.error ? (
            <p>{appContext.error}</p>
          ) : lastSong.length === 0 ? (
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
                  artistName={song.artistName}
                  songName={song.songName}
                  albumImage={song.albumImage}
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
