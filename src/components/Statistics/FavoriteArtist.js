import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import URL from '../../store/constant/constant';
import ArtistList from './List/ArtistList';
import styled from 'styled-components';
import background from '../images/favoriteArtist.png';
import Header from '../Header/Header';
import Login from '../Login/Login';
import login from '../images/nologin.png'
import noplay from '../images/noplay.png'

const Background = styled.body`
  background-image: url(${background});
  background-size: cover;
  background-attachment: fixed;
`

const NotLogin = styled.body`
    background-image: url(${login});
  width: 100%;
  z-index: 10;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  height: 100vh;
`

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


const App = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const FavoriteArtist = () => {
    const [artist, setArtist] = useState([]);

    useEffect(() => {
        fetchArtists();
    }, []);
    
    const fetchArtists = () => {
        axios
            .get(URL.GET_HEARD_ARTISTS)
            .then(response => {
                setArtist(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };


    return (
        <>
            {artist.length === 0 ? (
                <NotLogin>
                    <Header />
                    <Null src = {noplay} />
                </NotLogin>
            ) : (
                <Background>
                    <Header />
                    <App>
                        <Container>
                            {
                                artist.map(song => (
                                    <ArtistList
                                        key={song.songId}
                                        artistName={song.artistName}
                                        artistImage={song.artistImage}
                                    />
                                ))}
                        </Container>
                    </App>
                </Background>
            )}
        </>
    );
};

export default FavoriteArtist;