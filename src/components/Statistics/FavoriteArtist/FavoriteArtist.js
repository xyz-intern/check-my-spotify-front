import {useState, useEffect} from 'react';
import axios from 'axios';
import List from '../List/List';
import URL from '../../../store/constant/constant';
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