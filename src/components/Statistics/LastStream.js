import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import SongList from './List/SongList';
import URL from '../../store/constant/constant';
import Header from '../Header/Header';
import background from '../images/lastSong.png';
import styled from 'styled-components';
import noplay from '../images/noplay.png'
import login from '../images/nologin.png'
import { AppContext } from '../../App';


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
  /* position: relative; */
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Loading = styled.div`
  font-size: 50px;
  font-weight: 400;
  margin-top: -50px;
  color: black;
  /* 추가적인 스타일링을 원하신다면 필요한 스타일을 여기에 추가하세요 */
`;

const LastStream = () => {
  const appContext = useContext(AppContext)
  const [isLoading, setIsLoading] = useState(true);
  const [lastSong, setLastSong] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetchLastSong();
    }, 1000)
  }, []);

  const fetchLastSong = () => {
    setIsLoading(true);
    console.log('before', isLoading);
    axios
      .get(URL.GET_LAST_SONG)
      .then((response) => {
        setLastSong(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };


  return (
    <>
      {isLoading ? (
        <Background>
          <Header />
          <Container>
            <Loading>
              Loading ...</Loading>
          </Container>
        </Background>
      ) : (
        <>
          {lastSong.length === 0 ? (
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
      )}
    </>
  );
};

export default LastStream;
