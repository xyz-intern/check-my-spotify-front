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
        let scope = 'user-read-private user-read-email';
      
        let client_id = process.env.REACT_APP_CLIENT_ID;
        let redirect_uri = process.env.REACT_APP_REDIRECT_URI;
    
        let link = `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}&state=${state}`;
        
        window.location.href = link;
    }
    return <button herf='' onClick={axiosRequest}>Spotify Login !!!</button>
}
export default Login;