import axios from "axios";
import { useEffect, useState } from "react";

const Login = () => {
  const [duration_ms, setDurationMs] = useState(null);

  function generateRandomString(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  const axiosRequest = () => {
  let state = generateRandomString(16); 
        let scope = 'user-read-private user-read-email user-read-currently-playing user-read-playback-state';
        let client_id = process.env.REACT_APP_CLIENT_ID;
        let redirect_uri = process.env.REACT_APP_REDIRECT_URI;

        let link = `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}&state=${state}`;

        window.location.href = link;
  }

  const fetchTrack = async () => {
    try {
      const userId = "dlatldhs";
      const response = await axios.get(`http://localhost:3000/apis/getTrack/${userId}`);
      const newDurationMs = response.data;
      setDurationMs(newDurationMs);
    } catch (error) {
      console.error(error);
    }
  };

//   useEffect(() => {
//     // 최초 렌더링 시 fetchTrack 호출
//     fetchTrack();
//   }, []);

  useEffect(() => {
    // duration_ms가 변경될 때마다 fetchTrack을 호출하는 부분 유지
    if (duration_ms !== null) {
      const timerId = setTimeout(() => {
        fetchTrack();
      }, duration_ms);

      // cleanup 함수를 이용하여 타이머 해제
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [duration_ms]);

  return (
    <div>
      <button onClick={axiosRequest}>
        Spotify Login !!!
      </button>
      {!duration_ms && <button onClick={fetchTrack}>재생하기</button>}
    </div>
  );
};

export default Login;

