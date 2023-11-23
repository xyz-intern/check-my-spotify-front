import axios from 'axios';
import { useEffect, useState } from 'react';
import SongList from '../List/SongList';

const LastSong = () => {
    const [lastSong, setLastSong] = useState([]);

    useEffect(() => {
        fetchLastSong();
    }, []);

    const fetchLastSong = () => {
        axios.get('http://localhost:3000/last/song')
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
