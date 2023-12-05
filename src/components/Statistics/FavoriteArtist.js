import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import URL from '../../store/constant/constant';
import ArtistList from './List/ArtistList';
import styled from 'styled-components';
import { AppContext } from '../../App';
import Header from '../Header/Header';
import noplay from '../images/noplay.png'
import * as t from '../../store/style-components/GlobalStyle'
import ErrorHandler from '../../store/error/ErrorHandler'
import error from '../images/error.png'
import { NavLink, useNavigate } from 'react-router-dom';

const App = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  position: relative;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Error = styled.p`
    position: absolute;
    font-size: 30px;
    top: 50%;
    left: 35%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-weight: 500;
`

const Status = styled.p`
    position: absolute;
    top: 15%;
    left: 35%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 200px;
    font-weight: 900;
    background: linear-gradient(176deg, #a9a9a9, #E8E9EB);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    text-shadow: none;
`;

const Image = styled.img`
    position: absolute;
    max-width: 230px;
    width: 230px;
    height: 210px;
    top: 25%;
    right: 20%;
`

const Home = styled.button`
    width: 200px;
    height: 50px;
    border: none;
    position: absolute;
    top: 60%;
    left: 23%;
    background-color: #007FFF;
    color: white;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`

const FavoriteArtist = () => {
    const appContext = useContext(AppContext);
    const navigate = useNavigate();
    const [artist, setArtist] = useState([]);
    const { handleError, errorMessage, errorStatus } = ErrorHandler();

    useEffect(() => {
        setTimeout(() => {
            fetchArtists();
        }, 1000)
    }, []);
    
    const fetchArtists = () => {
        appContext.setIsLoading(true);
        appContext.setError(null);
        axios
            .get(URL.GET_HEARD_ARTISTS)
            .then(response => {
                setArtist(response.data);
                appContext.setIsLoading(false);
            })
            .catch((error) => {
                let errorMessage = handleError(error);
                appContext.setError(errorMessage);
                appContext.setIsLoading(false);
            });
    };

    const HomeNavigate = () => {
        navigate('/')
    }
    
    if (appContext.isLoading && artist.length === 0) {
        return (
            <t.Background background={false}>
                <Header />
                <t.Container>
                    <t.Loading>Loading ...</t.Loading>
                </t.Container>
            </t.Background>
        );
    }
    
    if (appContext.error) {
        return (
            <div>
                <Status>{errorStatus}</Status>
                <Error>{errorMessage}</Error>
                <Image src={error} />
                <Home onClick={HomeNavigate}>Go to Homepage</Home>
            </div>
        )
    }
    
    if (artist.length === 0) {
        return (
            <t.LoginBackground>
                <Header />
                <t.Play src={noplay} />
            </t.LoginBackground>
        );
    }
    
    return (
        <t.Background background={false}>
            <Header />
            <App>
                <Container>
                    {artist.map((song) => (
                        <ArtistList
                            key={song.songId}
                            artistName={song.artistName}
                            songName={song.songName}
                            artistImage={song.artistImage}
                        />
                    ))}
                </Container>
            </App>
        </t.Background>
    );
                    }
export default FavoriteArtist;    