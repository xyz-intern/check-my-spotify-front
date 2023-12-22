import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { AppContext } from '../../App';
import { useNavigate } from 'react-router-dom';

export interface TransferType{
  isThrow: boolean
  isError: boolean
}
const Redirection = () => {
  const navigate = useNavigate();
  const appContext = useContext(AppContext);
  const [transfer, setTransfer] = useState<TransferType>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(`http://localhost:3000/callback?code=${appContext?.code}&state=${appContext?.state}`, { withCredentials: true });
        setTransfer({isThrow: true, isError: false})
      } catch (error) {
        setTransfer({isThrow: false, isError: true})
      }
   
      appContext?.setIsLoggin(true);
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/');
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>{transfer?.isThrow ? (transfer?.isError ? "데이터를 전송 중입니다." : "에러 발생") : "데이터를 성공적으로 전송하였습니다."}</div>
    </div>
  );
};

export default Redirection;