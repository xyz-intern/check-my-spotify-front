import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import {AppContext} from '../../App'

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

const LogoutBtn = styled.div`
    border: none;
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 20px;
`

const Header = () => {
    const appContext = useContext(AppContext)
    return (
        <Headers>
            <Move>
                <Link to="/last/stream">Last Stream</Link>
            </Move>

            <Move>
                <Link to="/most/stream">Most Stream</Link>
            </Move>

            <Move>
                <Link to="/favorite/artist">FavoriteArtist</Link>
            </Move>

            <Move>
                {!appContext.isLoggin? (<Link to="/callback">Login</Link>) : (<Link to = "/logout" ><LogoutBtn>Logout</LogoutBtn></Link>) }
            </Move>
        </Headers>
    )
}
export default Header;
