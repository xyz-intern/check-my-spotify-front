import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import SongList from './List/SongList'
import URL from "../../store/constant/constant";
import Header from "../Header/Header";
import noplay from '../images/noplay.png'
import { AppContext } from "../../App";
import * as t from '../../store/style-components/GlobalStyle'



const MostStream = () => {
    const appContext = useContext(AppContext);
    const [song, setLastSong] = useState([]);

    useEffect(() => {
        fetchFavoriteSong();
    }, []);

    const fetchFavoriteSong = () => {
        appContext.setIsLoading(true)
        axios.get(URL.GET_FAVORITE_SONG)
            .then(response => {
                setLastSong(response.data);
                appContext.setIsLoading(false)
            })
            .catch(error => {
                console.log(error);
                appContext.setIsLoading(false)
            });
    }

    return (
        <>
            {appContext.isLoading && song == '' ? (
                <t.Background background={true}>
                    <Header />
                    <t.Container>
                        <t.Loading>
                            Loading ...</t.Loading>
                    </t.Container>
                </t.Background>
            ) : (
                <>
                    {song == '' ? (
                        <t.LoginBackground>
                            <Header />
                            <t.Play src={noplay} />
                        </t.LoginBackground>
                    ) : (
                        <t.Background background={true}>
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

                        </t.Background>
                    )}
                </>
            )}
        </>
    );
}
export default MostStream;