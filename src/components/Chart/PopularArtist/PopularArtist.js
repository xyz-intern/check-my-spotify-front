import axios from 'axios';
import { useEffect, useState , useRef } from 'react';
import ChartList from '../ChartList/ChartList';
import styled, { keyframes } from 'styled-components';
import { gsap } from 'gsap/gsap-core';

const ScrollContainer = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    top: 5%;
`
const BannerMove = keyframes`
    from { transform: translateX(0px); }
    to   { transform: translateX(-22560px); }
`

const Article = styled.div`
    display: flex;
    width: 400%;
    white-space: nowrap;    
    animation: ${BannerMove} 400s linear infinite;
    // animation-iteration-count: infinite;
    position: relative;
`

const ScrollItem = styled.div`
    display: flex;    
    flex: none;
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
                <Article>
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

                {popularArtist.map((data) => (
                    <ScrollItem key={data.rank+50} className='box'>
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