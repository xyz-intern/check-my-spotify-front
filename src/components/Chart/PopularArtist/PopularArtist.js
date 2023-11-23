import axios from 'axios';
import { useEffect, useState , useRef } from 'react';
import ChartList from '../ChartList/ChartList';
import styled from 'styled-components';

const ScrollContainer = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
`;

const ScrollItem = styled.div`
    flex: none;
    scroll-snap-align: start;
    margin-right: 100px;
    max-width: 350px;
    width: 100%;
    height: 100%;
`;

const PopularArtist = () => {
    const scrollRef = useRef(null);
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
        <ScrollContainer ref={scrollRef}>
            {popularArtist.map((data) => (
                <ScrollItem key={data.rank}>
                    <ChartList
                        type="artist"
                        rank={data.rank}
                        artist={data.artist}
                        imageUri={data.imageUri}
                    />
                </ScrollItem>
            ))}
        </ScrollContainer>
    );
}

export default PopularArtist;
