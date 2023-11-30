import styled from 'styled-components';
import spotify from '../images/spotify.jpg'
import Header from '../Header/Header';
import background from '../images/Login.png'

const Background = styled.div`
background-image: url(${background});
  background-size: cover;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
`
const Container = styled.div`
  background-color: rgba(230, 230, 230, 0.5);
  position: relative;
  top: 45%;
  left: 50%;
  width: 700px;
  height: 320px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`;

const Content = styled.div`
  font-size: 20px;
  -webkit-text-stroke: 0.7px;
  top: 40px;
  position: absolute;
`;

const Logins = styled.button`
  background-image: url(${spotify});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 40px;
  border: none;
  width: 400px;
  height: 150px;
  top: 90px;
  position: absolute;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

const Login = () => {
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
    let scope = 'user-read-private user-read-email user-read-currently-playing user-read-playback-state user-modify-playback-state';
    let client_id = process.env.REACT_APP_CLIENT_ID;
    let redirect_uri = process.env.REACT_APP_REDIRECT_URI;
    let link = `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}&state=${state}`;
    window.location.href = link;
  }

  return (
    <Background>
      <Header />
      <Container>
        <Content>Spotify에 로그인하기</Content>
        <Logins onClick={axiosRequest}></Logins>
      </Container>
    </Background>
  );
}

export default Login;
