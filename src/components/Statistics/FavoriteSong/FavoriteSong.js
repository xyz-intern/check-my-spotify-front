import { useState, useEffect } from "react";
import axios from 'axios';
import SongList from '../List/SongList'
import URL from "../../../store/constant/constant";
const FavoriteSong = () => {
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
        <div>
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
        </div>
    );
}
export default FavoriteSong;