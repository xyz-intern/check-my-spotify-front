import React, { useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useContext } from 'react';
import { AppContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const Redirection = (props) => {
  const navigate = useNavigate();
  const appContext = useContext(AppContext);

  let is_throw = false;
  let is_error = false;

  let refreshToken;
  let userId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(`http://localhost:3000/callback?code=${appContext.code}&state=${appContext.state}`, { withCredentials: true });
        is_throw = true;
      } catch (error) {
        is_error = true;
      }
      props.isLoggin();
      navigate('/')
    };
  
    fetchData();
    const interval = setInterval(reissueToken, 3540000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const reissueToken = async () => {
    try {
      refreshToken = Cookies.get('refreshToken');
      userId = Cookies.get('userId');
      await axios.post('http://localhost:3000/reissue', { refreshToken: refreshToken, userId: userId, withCredentials: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>{is_throw ? (is_error ? "데이터를 전송 중입니다." : "에러 발생") : "데이터를 성공적으로 전송하였습니다."}</div>
    </div>
  )
};

export default Redirection;
