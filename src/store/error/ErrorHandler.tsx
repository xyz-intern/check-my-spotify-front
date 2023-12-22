import React, { useContext, useState } from 'react';
import { AppContext, PageContext } from '../../App';
export interface ErrorType {
  errorMessage: string
  errorStatus: number | string
}

const UseErrorHandler = () => {
  const appContext = useContext(AppContext)
  const [error, setError] = useState<ErrorType>()
  const handleError = (error: any) => {
    if (error.response) {
      const status = error.response.status;
      if (status === 404) {
        setError({ errorMessage: 'Pages not found', errorStatus: status });
      } else if (status === 401) {
        setError({ errorMessage: 'You do not have access', errorStatus: status });
        localStorage.removeItem('isLoggedIn')
        appContext?.setIsLoggin(false);
        appContext?.setCode('')
        appContext?.setState('')
        alert("다시 로그인해주세요");
      } else if (status === 400) {
        setError({ errorMessage: 'Bad Request', errorStatus: status });
      } else if (status === 500) {
        setError({ errorMessage: 'An unknown error occurred', errorStatus: status });
      }
    } else if (error == 'AxiosError: Network Error') {
      setError({ errorMessage: 'Network Error!', errorStatus: 102 });
    }
    else {
      setError({ errorMessage: 'Something went wrong!', errorStatus: 'Error' });
    }
  };

  return {handleError, error}
};
export default UseErrorHandler;