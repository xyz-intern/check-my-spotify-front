import { useState, useEffect } from 'react';
import axios from 'axios';
import URL from '../../store/constant/constant';
import ArtistList from './List/ArtistList';
import styled from 'styled-components';
import background from '../images/favoriteArtist.png';
import Header from '../Header/Header';
const Background = styled.div`
  background-image: url(${background});
  background-size: 100% 100%;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
`;

const App = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  // 배경 꽉차게 스크롤
  overflow-y: auto;
  height: 100%;
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
            <App>
                {artist.map(song => (
                    <ArtistList
                        key={song.songId}
                        artistName={song.artistName}
                        artistImage={song.artistImage}
                    />
                ))}
            </App>
        </Background>
    );
};

export default FavoriteArtist;
