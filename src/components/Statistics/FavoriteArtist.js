import { useState, useEffect } from 'react';
import axios from 'axios';
import URL from '../../store/constant/constant';
import ArtistList from './List/ArtistList';
import styled from 'styled-components';
import background from '../images/favoriteArtist.png';
import Header from '../Header/Header';

const Background = styled.body`
  background-image: url(${background});
  background-size: cover;
  background-attachment: fixed;
`

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
        <Background>
            <Header />
            <App>
            <Container>
                {artist.map(song => (
                    <ArtistList
                        key={song.songId}
                        artistName={song.artistName}
                        artistImage={song.artistImage}
                    />
                ))}
            </Container>
            </App>
        </Background>
    );
};

export default FavoriteArtist;
