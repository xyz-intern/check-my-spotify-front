import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import SongList from './List/SongList'
import URL from "../../store/constant/constant";
import Header from "../Header/Header";
import noplay from '../images/noplay.png'
import { PageContext } from "../../App";
import * as t from '../../styles/GlobalStyle'
import ErrorHandler from '../../store/error/ErrorHandler'
import * as e from '../../styles/ErrorStyle'
import { useNavigate } from "react-router-dom";
import error from '../images/error.png';
import React from "react";

export interface SongType {
    songId: string
    artistName: string
    songName: string
    albumImage: string
    count: string
}
const MostStream = () => {
    const pageContext = useContext(PageContext);
    const [song, setLastSong] = useState<SongType[]>([]);
    const navigate = useNavigate();
    const [loadingPage, setLoadingPage] = useState(true)
    const { handleError, errorMessage, errorStatus } = ErrorHandler();

    useEffect(() => {
        fetchFavoriteSong();
    }, []);

    const fetchFavoriteSong = () => {
        pageContext?.setIsLoading(true)
        pageContext?.setError(null)
        axios.get(URL.GET_FAVORITE_SONG,
            { withCredentials: true })
            .then(response => {
                setLastSong(response.data);
                pageContext?.setIsLoading(false)
                setLoadingPage(false)
            })
            .catch(error => {
                let errorMessage = handleError(error)
                pageContext?.setError(errorMessage);
                pageContext?.setIsLoading(false)
                setLoadingPage(false)
            });
    }

    const HomeNavigate = () => {
        navigate('/')
    }

    if (pageContext?.error) {
        return (
            <div>
                <e.Status>{errorStatus}</e.Status>
                <e.Error>{errorMessage}</e.Error>
                <e.Image src={error} />
                <e.Home onClick={HomeNavigate}>Go to Homepage</e.Home>
            </div>
        )
    }

    if (song.length === 0 && pageContext?.isLoading) {
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

    return (
        <t.Background background={true}>
            <Header />
            <t.App>
                {song.map((song) => (
                    <SongList
                    song = {song}
                    />

                ))}
            </t.App>
        </t.Background>
    )
}

export default MostStream;