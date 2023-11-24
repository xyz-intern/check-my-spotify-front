import {useState, useEffect} from 'react';
import axios from 'axios';
import URL from '../../../store/constant/constant';
import ArtistList from '../List/ArtistList';
const FavoriteArtist = () => {
    const [artist, setArtist] = useState([]);

    useEffect(() => {
        fetchArtists();
    }, []);

    const fetchArtists = () => {
        axios.get(URL.GET_HEARD_ARTISTS)
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