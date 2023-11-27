import axios from 'axios';
import { useEffect, useState } from 'react';
import SongList from './List/SongList';
import URL from '../../store/constant/constant';
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
            {lastSong.map((song) => (
                <SongList
                    key={song.songId}
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

export default LastSong;
