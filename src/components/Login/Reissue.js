import { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import axios from "axios";
import Cookies from "js-cookie";
import URL from '../../store/constant/constant'

const Reissue = () => {
    const appContext = useContext(AppContext);

    let userId;
    let refreshToken;

    useEffect(() => { 
        let intervalId;
      
        if (appContext.isLoggin) {
          intervalId = setInterval(reissueToken, 1000);
        }
      
        return () => {
          if (intervalId) {
            clearInterval(intervalId);
          }
        };
      }, [appContext.isLoggin]);


      const reissueToken = async () => {
        try {
          refreshToken = Cookies.get('refreshToken');
          userId = Cookies.get('userId');
          await axios.post(`${URL.TOKEN_REISSUE}`, { refreshToken: refreshToken, userId: userId, withCredentials: true });
        } catch (error) {
          console.log(error);
        }
      };
}
export default Reissue;