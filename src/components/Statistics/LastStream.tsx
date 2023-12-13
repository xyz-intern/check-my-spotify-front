import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import SongList from './List/SongList';
import URL from '../../store/constant/constant';
import Header from '../Header/Header';
import noplay from '../images/noplay.png'
import * as t from '../../styles/GlobalStyle'
import { PageContext } from '../../App';
import ErrorHandler from '../../store/error/ErrorHandler'
import * as e from '../../styles/ErrorStyle'
import error from '../images/error.png';
import { useNavigate } from 'react-router-dom';
import React from 'react'

export interface SongType {
  songId: string
  artistName: string
  songName: string
  albumImage: string
}

const LastStream = () => {
  const pageContext = useContext(PageContext);
  const [lastSong, setLastSong] = useState([]);
  const navigate = useNavigate();
  const [loadingPage, setLoadingPage] = useState(true);
  const { handleError, errorMessage, errorStatus } = ErrorHandler()

  useEffect(() => {
      fetchLastSong();
  }, []);

  const fetchLastSong = () => {
    pageContext?.setIsLoading(true);
    pageContext?.setError(null);
    axios
      .get(URL.GET_LAST_SONG, {
        withCredentials: true
      })
      .then((response) => {
        setLastSong(response.data);
        pageContext?.setIsLoading(false);
        setLoadingPage(false)
      })
      .catch((error) => {
        console.log("들어오잖아")
        handleError(error)
        console.log(pageContext?.error)
        pageContext?.setError(errorMessage);
        console.log(pageContext?.error)
        pageContext?.setIsLoading(false);
        setLoadingPage(false)
      });

  };

  const HomeNavigate = () => {
    navigate('/')
  }

  if (pageContext?.error !== null) {
    alert("dfldsjfldljfdjfldfjdksjfdsklfjdsklfjsdlk")
    return (
      <e.ErrorDiv>
        <e.Status>{errorStatus}</e.Status>
        <e.Error>{errorMessage}</e.Error>
        <e.Image src={error} />
        <e.Home onClick={HomeNavigate}>Go to Homepage</e.Home>
      </e.ErrorDiv>
    )
  }
  

  if (lastSong.length === 0 && pageContext?.isLoading) {

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

  return (
    <t.Background background={true}>
      <Header />
      <t.App>
      {lastSong.map((song) => (
        <SongList
          type="stream"
          song = {song}
        />
      ))}
      </t.App>
    </t.Background>
  )
}


export default LastStream;
