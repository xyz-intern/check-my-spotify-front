import axios from 'axios';
import { useEffect, useState , useRef } from 'react';
import ChartList from '../ChartList/ChartList';
import styled, { keyframes } from 'styled-components';

const ScrollContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    top: 10%;
    overflow: hidden;
`
const BannerMove = keyframes`
    from { transform: translateX(0px); }
    to   { transform: translateX(-22560px); }
`

const Article = styled.div`
    display: flex;
    width: fit-content;
    transition: transform 2s ease-in-out;
`

const ScrollItem = styled.div`
    width: 472px;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PopularArtist = () => {
    const scrollRef = useRef(null);
    const [popularArtist, setPopularArtist] = useState([]);
    const [slideIndex, setSlideIndex] = useState(0);

    const totalSlides = 47;
    const slideDuration = 2000;
    
    useEffect(() => {
        fetchLastSong();
        const interval = setInterval(() => {
            const nextIndex = (slideIndex + 1) % totalSlides;
            setSlideIndex(nextIndex);
          }, slideDuration);
        return () => clearInterval(interval);
    },  [slideIndex, totalSlides, slideDuration] );


    const fetchLastSong = () => {
        axios.get('http://192.168.0.133:3000/top/artist')
            .then(response => {
                setPopularArtist(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (

            <ScrollContainer ref={scrollRef}>
                <Article
                style={{ transform: `translateX(-${slideIndex * 472}px)` }}
                >
                {popularArtist.map((data) => (
                    <ScrollItem key={data.rank} className='box'>
                        <ChartList
                            type="artist"
                            rank={data.rank}
                            artist={data.artist}
                            imageUri={data.imageUri}
                            />
                    </ScrollItem>
                ))}
                </Article>
            </ScrollContainer>

    );
}
export default PopularArtist;
