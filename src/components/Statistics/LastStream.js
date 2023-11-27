import axios from 'axios';
import { useEffect, useState } from 'react';
import SongList from './List/SongList';
import URL from '../../store/constant/constant';
import Header from '../Header/Header';
import background from '../images/lastSong.png';
import styled from 'styled-components';

const Background = styled.div`
  background-image: url(${background});
  width: 100%;
  z-index: 10;
  background-attachment:fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
`;

const LastStream = () => {
    const [lastSong, setLastSong] = useState([]);

    useEffect(() => {
        fetchLastSong();
    }, []);

    const fetchLastSong = () => {
        axios.get(URL.GET_LAST_SONG)
            .then(response => {
                setLastSong(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <Background>
            <Header />
            {lastSong.map((song) => (
                <SongList
                    key={song.songId}
                    id={song.songId}
                    artistName={song.artistName}
                    songName={song.songName}
                    albumImage={song.albumImage}
                    albumName={song.albumName}
                    count={song.count}
                />
            ))}
        </Background>
    );
}

export default LastStream;
