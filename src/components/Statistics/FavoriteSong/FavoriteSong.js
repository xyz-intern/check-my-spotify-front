import { useState, useEffect } from "react";
import axios from 'axios';
import SongList from '../List/SongList'
const FavoriteSong = () => {
    const [song, setLastSong] = useState([]);

    useEffect(() => {
        fetchFavoriteSong();
    }, []);

    const fetchFavoriteSong = () => {
        axios.get('http://localhost:3000/favorite/song')
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