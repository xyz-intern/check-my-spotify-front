import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Logout = (props) => {
    const navigate = useNavigate();
    const logoutHandler = () => {
        props.isLogout();
    }

    const deleteUserTokenHanlder = () => {
    }

    useEffect(() => {
        logoutHandler();
        deleteUserTokenHanlder();
        Cookies.remove('userId');
        Cookies.remove('refreshToken');
        Cookies.remove('connect.sid');
        navigate('/');
        alert('로그아웃이 완료되었습니다.');

    })
}
export default Logout