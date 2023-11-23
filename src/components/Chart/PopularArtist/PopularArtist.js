import axios from 'axios';
import { useEffect, useState , useRef } from 'react';
import ChartList from '../ChartList/ChartList';
import styled, { keyframes } from 'styled-components';


// const ScrollContainer = styled.div`
//     display: flex;
//     overflow-x: auto;
//     /* /* scroll-snap-type: x mandatory; */
//     -webkit-overflow-scrolling: touch;
//     scroll-behavior: smooth; 
// `;

const ScrollContainer = styled.div`
    width: 100%;
    overflow: hidden;
    position: reletive;

    &::after {
        width: 1000%;
        
    }
`;

const BannerMove = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
`

const Article = styled.div`
    display: flex;
    width: 3000%;
    animation: ${BannerMove} 100s linear infinite;
    white-space: nowrap;
    position: reletive;
`
    
// const ScrollItem = styled.div`
//     flex: none;
//     scroll-snap-align: start;
//     margin-right: 100px;
//     max-width: 350px;
//     width: 100%;
//     height: 100%;
// `;

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
        // version 1
        // <ScrollContainer ref={scrollRef}>
        //     {popularArtist.map((data) => (
        //         <ScrollItem key={data.rank}>
        //             <ChartList
        //                 type="artist"
        //                 rank={data.rank}
        //                 artist={data.artist}
        //                 imageUri={data.imageUri}
        //             />
        //         </ScrollItem>
        //     ))}
        // </ScrollContainer>

        // version 2
        <ScrollContainer ref={scrollRef}>
            <Article>
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
            </Article>
        </ScrollContainer>

    );
}

export default PopularArtist;
