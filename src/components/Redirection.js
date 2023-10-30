import React, { useEffect } from 'react';
import axios from 'axios';

const Redirection = () => {

    const code = new URL(document.location.toString()).searchParams.get('code');
    const state = new URL(document.location.toString()).searchParams.get('state');
    console.log(code, state);

    let is_throw = false;
    let is_error = false;

    

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}?code=${code}&state=${state}`)
            .then((r) => {
                console.log(r.data);
                console.log('good');
                is_throw = true;
            })
            .catch((error) => {
                // Handle the error here
                console.error("Error occurred:", error);
                is_error = true;
            });
    }, []);



    return (
        <div>
            <div>{is_throw ? (is_error ? "데이터를 전송 중입니다." : "에러 발생") : "데이터를 성공적으로 전송하였습니다."}</div>
        </div>
    )
};

export default Redirection;
