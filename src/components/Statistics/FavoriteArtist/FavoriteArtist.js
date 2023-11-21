import {useState, useEffect} from 'react';
import axios from 'axios';
import List from '../List/List';
const FavoriteArtist = () => {
    const [artist, setArtist] = useState([]);

    useEffect(() => {
        fetchArtists();
    }, []);

    const fetchArtists = () => {
        axios.get('http://localhost:3000/last/song')
            .then(response => {
                setArtist(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            {artist.map((song) => (
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

export default FavoriteArtist;