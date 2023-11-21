import axios from 'axios';
import { useEffect, useState } from 'react';
import ChartList from '../ChartList/ChartList';

const PopularSong = () => {
    const [popularSong, setPopularSong] = useState([]);

    useEffect(() => {
        fetchPopularSong();
    }, []);

    const fetchPopularSong = () => {
        axios.get('http://localhost:3000/top/songs')
            .then(response => {
                setPopularSong(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            {popularSong.map((song) => (
                <ChartList
                    key={song.rank}
                    type= "song"
                    rank={song.rank}
                    artist={song.artist}
                    songName={song.trackName}
                    imageUri= {song.imageUri}
                />
            ))}
        </div>
    );
}

export default PopularSong;
