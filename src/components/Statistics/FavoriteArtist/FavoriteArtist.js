import { useState, useEffect } from 'react';
import axios from 'axios';
import URL from '../../../store/constant/constant';
import ArtistList from '../List/ArtistList';
import styled from 'styled-components';
import background from '../../images/favoriteArtist.png';

const Background = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  background-size: cover;
`;

const App = styled.div`
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
