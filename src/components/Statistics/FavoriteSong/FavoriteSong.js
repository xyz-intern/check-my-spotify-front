import { useState, useEffect } from "react";
import axios from 'axios';
import List from '../List/List'
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
                <List
                    key={song.songId}
                    id={song.songId}
                    artistName={song.artistName}
                    songName={song.songName}
                    imageUri={song.imageUri}
                    albumName={song.albumName}
                    count={song.count}
                />
            ))}
        </div>
    );
}
export default FavoriteSong;