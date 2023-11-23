import {useState, useEffect} from 'react';
import axios from 'axios';
import ArtistList from '../List/ArtistList';
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
                <ArtistList
                    key={song.songId}
                    artistName={song.artistName}
                    count={song.playCount}
                />
            ))}
        </div>
    );
}

export default FavoriteArtist;