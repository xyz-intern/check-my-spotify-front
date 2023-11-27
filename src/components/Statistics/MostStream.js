import { useState, useEffect } from "react";
import axios from 'axios';
import SongList from './List/SongList'
import URL from "../../store/constant/constant";
import Header from "../Header/Header";
import background from '../images/mostStream.png';
import styled from "styled-components";

const Background = styled.div`
  background-image: url(${background});
  width: 100%;
  z-index: 10;
  background-attachment:fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
`
const MostStream = () => {
    const [song, setLastSong] = useState([]);

    useEffect(() => {
        fetchFavoriteSong();
    }, []);

    const fetchFavoriteSong = () => {
        axios.get(URL.GET_FAVORITE_SONG)
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
            {song.map((song) => (
                <SongList
                    key={song.songId}
                    type="song"
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
export default MostStream;