import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import SongList from './List/SongList'
import URL from "../../store/constant/constant";
import Header from "../Header/Header";
import noplay from '../images/noplay.png'
import { PageContext } from "../../App";
import * as t from '../../store/style-components/GlobalStyle'
import ErrorHandler from '../../store/error/ErrorHandler'
import * as e from '../../store/style-components/ErrorStyle'
import { useNavigate } from "react-router-dom";
import error from '../images/error.png'
const MostStream = () => {
    const pageContext = useContext(PageContext);
    const [song, setLastSong] = useState([]);
    const navigate = useNavigate();
    const [loadingPage, setLoadingPage] = useState(true)
    const { handleError, errorMessage, errorStatus } = ErrorHandler();

    useEffect(() => {
        fetchFavoriteSong();
    }, []);

    const fetchFavoriteSong = () => {
        pageContext.setIsLoading(true)
        pageContext.setError(null)
        axios.get(URL.GET_FAVORITE_SONG)
            .then(response => {
                setLastSong(response.data);
                pageContext.setIsLoading(false)
                setLoadingPage(false)
            })
            .catch(error => {
                handleError(error)
                pageContext.setError(errorMessage);
                pageContext.setIsLoading(false)
                setLoadingPage(false)
            });
    }

    const HomeNavigate = () => {
        navigate('/')
    }

    if (pageContext.isLoading && song.length == 0) {
        return (
            <t.Background background={true}>
                <Header />
                <t.Container>
                    <t.Loading>
                        Loading ...</t.Loading>
                </t.Container>
            </t.Background>
        )
    }


    if (song.length == 0 && !loadingPage) { 
        return (
            <t.LoginBackground>
                <Header />
                <t.Play src={noplay} />
            </t.LoginBackground>
        );
    }


    if (pageContext.error) {
        return (
            <div>
                <e.Status>{errorStatus}</e.Status>
                <e.Error>{errorMessage}</e.Error>
                <e.Image src={error} />
                <e.Home onClick={HomeNavigate}>Go to Homepage</e.Home>
            </div>
        )
    }

    return (
        <t.Background background={true}>
            <Header />
            {song.map((song) => (
                <SongList
                    key={song.songId}
                    type="song"
                    artistName={song.artistName}
                    songName={song.songName}
                    albumImage={song.albumImage}
                    count={song.count}
                />
            ))}
        </t.Background>
    )
}

export default MostStream;