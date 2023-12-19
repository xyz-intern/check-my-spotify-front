import styled from "styled-components";

export const Error = styled.p`
    position: absolute;
    font-size: 30px;
    text-align: left;
    font-weight: 500;
    margin: 0 0 0 0;
    left: 5%;
    bottom: 20%;
`

export const Status = styled.p`
    position: absolute;
    left: 0%;
    text-align: center;
    font-size: 250px;
    font-weight: 900;
    background: linear-gradient(176deg, #a9a9a9, #E8E9EB);
    background-clip: border-box;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    text-shadow: none;
    margin: 0 0 0 0;
    height: 100%;
    max-height: 210px;
`;

export const Image = styled.img`
    position: absolute;
    max-width: 230px;
    width: 100%;
    height: 100%;
    right: 0%;
    max-height: 210px;
    top: 0%;
`

export const Home = styled.button`
    width: 200px;
    height: 50px;
    border: none;
    position: absolute;
    background-color: #007FFF;
    color: white;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);
    bottom: 5%;
    left: 5%;
`

export const ErrorDiv = styled.div`
    height: 100%;
    max-height: 400px;
    width: 100%;
    max-width: 950px;
    position: relative;
    top: 25%;
    margin: auto;
`