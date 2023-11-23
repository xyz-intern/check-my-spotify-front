import React from "react";
import { Link } from 'react-router-dom'
import '../Header/Header.css'
import styled from "styled-components";


const Headers = styled.header`
    top: 0;
    width: 100%;
    height : 60px;
    display: flex;
    background-color: #1C0F13;
`

const Li = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Text = styled.a`
    text-decoration: none;
    color: white;
`

const Header = () => {
    return (
        <Headers>
            <Li>
                <Link to="/last/song"><Text>최근에 들은 노래</Text></Link>
            </Li>

            <Li>
                <Link to="/favorite/song"><Text>가장 많이 들은 노래</Text></Link>
            </Li>

            <Li>
                <Link to="/favorite/artist"><Text>가장 많이 들은 아티스트</Text></Link>
            </Li>

            <Li>
                <Link to="/callback"><Text>로그인</Text></Link>
            </Li>
        </Headers>
    )
}
export default Header;
