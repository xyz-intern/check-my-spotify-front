import {useState, useEffect} from 'react';
import axios from 'axios';
import List from '../List/List';
const FavoriteArtist = () => {
    const [artist, setArtist] = useState([]);

    useEffect(() => {
        fetchArtists();
    }, []);

    const fetchArtists = () => {
        axios.get('http://localhost:3000/heard/artists')
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
                    type="artist"
                    artistName={song.artistName}
                    count={song.playCount}
                />
            ))}
        </div>
    );
}

export default FavoriteArtist;