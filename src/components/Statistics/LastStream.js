import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import SongList from './List/SongList';
import URL from '../../store/constant/constant';
import Header from '../Header/Header';
import noplay from '../images/noplay.png'
import * as t from '../../store/style-components/GlobalStyle'
import { PageContext } from '../../App';
import ErrorHandler from '../../store/error/ErrorHandler'
import * as e from '../../store/style-components/ErrorStyle'
import error from '../images/error.png';
import { useNavigate } from 'react-router-dom';

const LastStream = () => {
  const pageContext = useContext(PageContext);
  const [lastSong, setLastSong] = useState([]);
  const [loadingPage, setLoadingPage] = useState(true)
  const navigate = useNavigate();
  const { handleError, errorMessage, errorStatus } = ErrorHandler()

  useEffect(() => {
      fetchLastSong();
  }, []);

  const fetchLastSong = () => {
    pageContext.setIsLoading(true);
    pageContext.setError(null);
    axios
      .get(URL.GET_LAST_SONG)
      .then((response) => {
        setLastSong(response.data);
        pageContext.setIsLoading(false);
        setLoadingPage(false)
      })
      .catch((error) => {
        handleError(error)
        pageContext.setError(errorMessage);
        pageContext.setIsLoading(false);
        setLoadingPage(false)
      });

  };

  const HomeNavigate = () => {
    navigate('/')
  }

  if (pageContext.isLoading && lastSong.length === 0) {
    return (
      <t.Background background={true}>
        <Header />
        <t.Container>
          <t.Loading>Loading ...</t.Loading>
        </t.Container>
      </t.Background>
    )
  }

  if (lastSong.length === 0 && !loadingPage) {
    return (
      <t.LoginBackground>
        <Header />
        <t.Play src={noplay} />
      </t.LoginBackground>
    );
  }

  if (pageContext.error && (lastSong.length === 0 && !loadingPage)) {
    return (
      <div>
        <e.Status>{errorStatus}</e.Status>
        <e.Error>{errorMessage}</e.Error>
        <e.Image src={error} />
        <e.Home onClick={HomeNavigate}>Go to Homepage</e.Home>
      </div>
    )

  }


  return (
    <t.Background background={true}>
      <Header />
      <t.App>
      {lastSong.map((song) => (
        <SongList
          key={song.songId}
          artistName={song.artistName}
          songName={song.songName}
          albumImage={song.albumImage}
        />
      ))}
      </t.App>
    </t.Background>
  )
}


export default LastStream;
