import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
const Logout = (props) => {
    const navigate = useNavigate();
    const logoutHandler = () => {
        props.isLogout();
    }

    const deleteUserTokenHanlder = () => {
        const userId = Cookies.get("userId");
        axios.delete(`http://localhost:3000/logout/${userId}`)
            .then((reponse) => {
                console.log('토큰 삭제가 완료되었습니다.');
            }).catch((error) => {
                console.log(error)
            })
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