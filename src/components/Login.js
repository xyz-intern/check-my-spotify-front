import Cookies from 'js-cookie';

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
    window.location.href = link
  }

  const logout = () => {
    Cookies.remove('refreshToken');
    Cookies.remove('userId');
  }

  return (
    <div>
      <button onClick={axiosRequest}>
        Spotify Login !!!
      </button>
      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Login;

