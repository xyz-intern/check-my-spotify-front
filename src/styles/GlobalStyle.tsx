import styled from "styled-components"
import nologin from '../components/images/nologin.png'
import moststream from '../components/images/mostStream.png';
import favoriteartist from "../components/images/favoriteArtist.png";

export interface BackgroundProps {
    background: true | false
}
export const Background = styled.div<BackgroundProps>`
    background-image: ${props => props.background ? `url(${moststream})` : `url(${favoriteartist})`};
    width: 100%;
    background-attachment:fixed;
    background-size: cover;
    background-repeat: no-repeat; 
    ::-webkit-scrollbar{
        display: none
    }
`


export const App = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  position: relative;
`

export const LoginBackground = styled.div`
    background-image: url(${nologin});
    width: 100%;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    position: relative;
    height: 100vh;
`;

export const Play = styled.img`
    position: absolute;
    width: 550px;
    height: 370px;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 25px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
`;


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Loading = styled.div`
    font-size: 50px;
    font-weight: 400;
    margin-top: -50px;
    color: black;
`;