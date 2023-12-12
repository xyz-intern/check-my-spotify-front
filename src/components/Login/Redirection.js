import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useContext } from 'react';
import { AppContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const Redirection = (props) => {
  const navigate = useNavigate();
  const appContext = useContext(AppContext);

  const [isThrow, setIsThrow] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(`http://localhost:3000/callback?code=${appContext.code}&state=${appContext.state}`, { withCredentials: true });
        setIsThrow(true);
      } catch (error) {
        setIsError(true);
      }
   
      appContext.setIsLoggin(true);
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/');
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>{isThrow ? (isError ? "데이터를 전송 중입니다." : "에러 발생") : "데이터를 성공적으로 전송하였습니다."}</div>
    </div>
  );
};

export default Redirection;
