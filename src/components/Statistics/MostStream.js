import { useState, useEffect } from "react";
import axios from 'axios';
import SongList from './List/SongList'
import URL from "../../store/constant/constant";
import Header from "../Header/Header";
import background from '../images/mostStream.png';
import styled from "styled-components";
import login from '../images/nologin.png'
import noplay from '../images/noplay.png'

const Background = styled.div`
  background-image: url(${background});
  width: 100%;
  z-index: 10;
  background-attachment:fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
`

const NotLogin = styled.div`
  background-image: url(${login});
  width: 100%;
  z-index: 10;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  height: 100vh;
`;

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
        <>
        {song == '' ? (
            <NotLogin>
                <Header />
                <Null src={noplay} />
            </NotLogin>
        ) : (
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
        )
        }
    </>
    );
}
export default MostStream;