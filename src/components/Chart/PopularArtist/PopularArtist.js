import axios from 'axios';
import { useEffect, useState } from 'react';
import ChartList from '../ChartList/ChartList';

const PopularArtist = () => {
    const [popularArtist, setPopularArtist] = useState([]);

    useEffect(() => {
        fetchLastSong();
    }, []);

    const fetchLastSong = () => {
        axios.get('http://localhost:3000/top/artist')
            .then(response => {
                setPopularArtist(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            {popularArtist.map((data) => (
                <ChartList
                    key={data.rank}
                    type="artist"
                    rank={data.rank}
                    artist={data.artist}
                    imageUri={data.imageUri}
                />
            ))}
        </div>
    );
}

export default PopularArtist;
