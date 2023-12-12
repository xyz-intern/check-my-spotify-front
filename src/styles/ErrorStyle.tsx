import styled from "styled-components";

export const Error = styled.p`
    position: absolute;
    font-size: 30px;
    top: 50%;
    left: 33%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-weight: 500;
`

export const Status = styled.p`
    position: absolute;
    top: 15%;
    left: 35%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 200px;
    font-weight: 900;
    background: linear-gradient(176deg, #a9a9a9, #E8E9EB);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    text-shadow: none;
`;

export const Image = styled.img`
    position: absolute;
    max-width: 230px;
    width: 230px;
    height: 210px;
    top: 25%;
    right: 20%;
`

export const Home = styled.button`
    width: 200px;
    height: 50px;
    border: none;
    position: absolute;
    top: 60%;
    left: 26%;
    background-color: #007FFF;
    color: white;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`
