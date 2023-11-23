import axios from 'axios';
import { useEffect, useState } from 'react';
import List from '../List/List';
import URL from '../../../store/constant/constant';
const LastSong = () => {
    const [lastSong, setLastSong] = useState([]);

    useEffect(() => {
        fetchLastSong();
    }, []);

    const fetchLastSong = () => {
        axios.get(URL.GET_LAST_SONG)
            .then(response => {
                setLastSong(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            {console.log(lastSong)}
            {lastSong.map((song) => (
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

export default LastSong;
