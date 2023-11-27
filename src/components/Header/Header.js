import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";

const Headers = styled.header`
    top: 0;
    width: 100%;
    height : 60px;
    display: flex;
`

const Move = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  a {
    text-decoration: none;
    color: black;
  }
`


const Header = () => {
    return (
        <Headers>
            <Move>
                <Link to="/last/song">Last Stream</Link>
            </Move>

            <Move>
                <Link to="/favorite/song">Most Stream</Link>
            </Move>

            <Move>
                <Link to="/favorite/artist">FavoriteArtist</Link>
            </Move>

            <Move>
                <Link to="/callback">Login</Link>
            </Move>
        </Headers>
    )
}
export default Header;
