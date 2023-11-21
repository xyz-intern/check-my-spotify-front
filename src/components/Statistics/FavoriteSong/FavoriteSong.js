import { useState, useEffect } from "react";
import axios from 'axios';
import List from '../List/List'
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