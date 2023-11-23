import React from "react";
import { Link } from 'react-router-dom'
import '../Header/Header.css'
import styled from "styled-components";

const Headers = styled.header`
    top: 0;
    width: 100%;
    height : 60px;
    display: flex;
`

const Li = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Text = styled.a`
    text-decoration: none;
    color: black;
`

const Header = () => {
    return (
        <Headers>
            <Li>
                <Link to="/last/song"><Text>Last Stream</Text></Link>
            </Li>

            <Li>
                <Link to="/favorite/song"><Text>Most Stream</Text></Link>
            </Li>

            <Li>
                <Link to="/favorite/artist"><Text>FavoriteArtist</Text></Link>
            </Li>

            <Li>
                <Link to="/callback"><Text>Login</Text></Link>
            </Li>
        </Headers>
    )
}
export default Header;
