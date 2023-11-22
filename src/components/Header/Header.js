import React from "react";
import {Link} from 'react-router-dom'
import '../Header/Header.css'
const Header = () => {
    return(
        <ul className="header">
            <li>
                <Link to = "/last/song">최근에 들은 노래</Link>
            </li>

            <li>
                <Link to = "/favorite/song">가장 많이 들은 노래</Link>
            </li>

            <li>
                <Link to = "/favorite/artist">가장 많이 들은 아티스트</Link>
            </li>

            <li>
                <Link to = "/callback">로그인</Link>
            </li>
        </ul>
    )
}
export default Header;
