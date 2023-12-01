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
    const appContext = useContext(AppContext);
    const [artist, setArtist] = useState([]);

    useEffect(() => {
        fetchArtists();
    }, []);

    const fetchArtists = () => {
        appContext.setIsLoading(true);

        axios
            .get(URL.GET_HEARD_ARTISTS)
            .then(response => {
                setArtist(response.data);
                appContext.setIsLoading(false);
                console.log("after", appContext.isLoading)
            })
            .catch(error => {
                console.log(error);
                appContext.setIsLoading(false);
            });
    };


    return (
        <>
            {appContext.isLoading && artist == '' ? (
                <t.Background background={false}>
                    <Header />
                    <t.Container>
                        <t.Loading>Loading ...</t.Loading>
                    </t.Container>
                </t.Background>
            ) : (
                <>
                    {artist.length === 0 ? (
                        <t.LoginBackground>
                            <Header />
                            <t.Play src={noplay} />
                        </t.LoginBackground>
                    ) : (
                        <t.Background>
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
                        </t.Background>
                    )}
                </>
            )}
        </>
    )};

export default FavoriteArtist;