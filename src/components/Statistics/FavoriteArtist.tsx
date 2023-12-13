import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import URL from '../../store/constant/constant';
import ArtistList from './List/ArtistList';
import styled from 'styled-components';
import { PageContext } from '../../App';
import Header from '../Header/Header';
import noplay from '../images/noplay.png'
import * as t from '../../styles/GlobalStyle'
import ErrorHandler from '../../store/error/ErrorHandler'
import error from '../images/error.png'
import { useNavigate } from 'react-router-dom';
import * as e from '../../styles/ErrorStyle'

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

export interface ArtistType{
    songId: string
    artistName: string
    songName: string
    artistImage: string
}
const FavoriteArtist = () => {
    const pageContext = useContext(PageContext);
    const navigate = useNavigate();
    const [artist, setArtist] = useState<ArtistType[]>([]);
    const [loadingPage, setLoadingPage] = useState(true)
    const { handleError, errorMessage, errorStatus } = ErrorHandler();

    useEffect(() => {
        fetchArtists();
    }, []);

    const fetchArtists = () => {
        pageContext?.setIsLoading(true);
        pageContext?.setError(null);
        axios
            .get(URL.GET_HEARD_ARTISTS)
            .then(response => {
                setArtist(response.data);
                pageContext?.setIsLoading(false);
                setLoadingPage(false)
            })
            .catch((error) => {
                let message = handleError(error);
                pageContext?.setError(errorMessage);
                pageContext?.setIsLoading(false);
                setLoadingPage(false)
            });
    };

    const HomeNavigate = () => {
        navigate('/')
    }


    if (pageContext?.error !== null) {
        return (
            <div>
                <e.Status>{errorStatus}</e.Status>
                <e.Error>{errorMessage}</e.Error>
                <e.Image src={error} />
                <e.Home onClick={HomeNavigate}>Go to Homepage</e.Home>
            </div>
        );
    }

    if (pageContext?.isLoading && artist.length === 0) {
        return (
            <t.Background background={false}>
                <Header />
                <t.Container>
                    <t.Loading>Loading ...</t.Loading>
                </t.Container>
            </t.Background>
        );
    }

    if (artist.length === 0 && !loadingPage) {
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
                            song = {song}
                        />
                    ))}
                </Container>
            </App>
        </t.Background>
    );
}
export default FavoriteArtist;    