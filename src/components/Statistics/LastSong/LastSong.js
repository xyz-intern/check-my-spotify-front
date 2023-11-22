import axios from 'axios';
import { useEffect, useState } from 'react';
import List from '../List/List';

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
