import React, { useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const Redirection = () => {
    const code = new URL(document.location.toString()).searchParams.get('code');
    const state = new URL(document.location.toString()).searchParams.get('state');

    let is_throw = false;
    let is_error = false;

    let refreshToken;
    let userId;

    useEffect(() => {
        const fetchData = async () => {
          try {
            await axios.get(`http://localhost:3000/callback?code=${code}&state=${state}`, { withCredentials: true });
            console.log('good');
            is_throw = true;
          } catch (error) {
            is_error = true;
          }
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
          const response = await axios.post('http://localhost:3000/reissue', { refreshToken: refreshToken, userId: userId, withCredentials: true });
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <div>
            <div>{is_throw ? (is_error ? "데이터를 전송 중입니다." : "에러 발생") : "데이터를 성공적으로 전송하였습니다."}</div>
            {/* <button onClick={reissueToken}>refreshToken 재발급</button> */}
        </div>
    )
};

export default Redirection;