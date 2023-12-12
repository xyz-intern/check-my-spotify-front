import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import SPOTIFY from '../../store/constant/constant';
import axios from "axios";
import { AppContext } from "../../App";
import React from "react";

const Logout = () => {
    const navigate = useNavigate();
    const appContext = useContext(AppContext)
    const deleteUserTokenHanlder = () => {
        const userId = Cookies.get("userId");
        axios.delete(`${SPOTIFY.LOGOUT}${userId}`)
            .then((reponse) => {
                console.log('토큰 삭제가 완료되었습니다.');
            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        appContext?.setIsLoggin(false);
        appContext?.setCode('');
        localStorage.removeItem('isLoggedIn');
        deleteUserTokenHanlder();
        Cookies.remove('userId');
        Cookies.remove('refreshToken');
        Cookies.remove('connect.sid');
        navigate('/');
        alert('로그아웃이 완료되었습니다.');

    })
}
export default Logout