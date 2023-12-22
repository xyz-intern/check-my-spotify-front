import axios from 'axios';
import { useEffect, useState, useRef, useContext } from 'react';
import ChartList from '../Chart/ChartList';
import styled from 'styled-components';
import Header from '../Header/Header';
import background from '../images/home.png'
import noplay from '../images/noplay.png';
import { PageContext } from '../../App'
import * as e from '../../styles/ErrorStyle'
import * as t from '../../styles/GlobalStyle'
import useErrorHandler from '../../store/error/ErrorHandler';
import { useNavigate } from 'react-router-dom';
import URL from '../../store/constant/constant';
import errorImage from '../images/error.png'

const Background = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  object-fit: cover;
  height: 100vh;
`;

const ScrollContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  top: 10%;
  overflow: hidden;
`;

const Article = styled.div`
  display: flex;
  width: fit-content;
  transition: transform 2s ease-in-out;
`;

const ScrollItem = styled.div`
  width: 472px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export interface ArtistType {
  rank: string;
  artist: string;
  imageUri: string;
}

const PopularArtist = () => {
  const pageContext = useContext(PageContext);
  const scrollRef = useRef(null);
  const [popularArtist, setPopularArtist] = useState<ArtistType[]>([]);
  const [slideIndex, setSlideIndex] = useState(0);

  const { handleError, error } = useErrorHandler();
  const totalSlides = 47;
  const slideDuration = 2000;

  useEffect(() => {
    fetchLastSong();
    const interval = setInterval(() => {
      const nextIndex = (slideIndex + 1) % totalSlides;
      setSlideIndex(nextIndex);
    }, slideDuration);
    return () => clearInterval(interval);
  }, []);

  const fetchLastSong = () => {
    pageContext?.setIsLoading(true);
    pageContext?.setError(null);
    axios
      .get(URL.GET_TOP_ARTISTS,{withCredentials: true})
      .then((response) => {
        setPopularArtist(response.data);
        pageContext?.setIsLoading(false);
      })
      .catch((error) => {
        handleError(error);
        pageContext?.setError(error?.errorMessage);
        pageContext?.setIsLoading(false);
        pageContext?.setLoadingPage(false)
      });
  };

  if (pageContext?.error !== null) {
    return (
      <e.ErrorDiv>
        <e.Status>{error?.errorStatus}</e.Status>
        <e.Error>{error?.errorMessage}</e.Error>
        <e.Image src={errorImage} />
      </e.ErrorDiv>
    );
  }

  if (popularArtist.length === 0 && pageContext?.isLoading) {
    return (
      <t.Background background={true}>
        <Header />
        <t.Container>
          <t.Loading>Loading ...</t.Loading>
        </t.Container>
      </t.Background>
    );
  }

  if (popularArtist.length === 0 && !pageContext?.loadingPage) {
    return (
      <t.LoginBackground>
        <Header />
        <t.Play src={noplay} />
      </t.LoginBackground>
    );
  }

  return (
    
    <Background>
      <Header />
      <ScrollContainer ref={scrollRef}>
        <Article style={{ transform: `translateX(-${slideIndex * 472}px)` }}>
          {popularArtist.map((artist) => (
            <ScrollItem key={artist.rank} className="box">
              <ChartList artist={artist} />
            </ScrollItem>
          ))}
        </Article>
      </ScrollContainer>
    </Background>
  );
};

export default PopularArtist;