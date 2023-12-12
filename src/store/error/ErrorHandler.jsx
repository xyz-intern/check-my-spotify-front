import React, { useState } from 'react';

export const useErrorHandler = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [errorStatus, setErrorStatus] = useState('');

  const handleError = (error) => {
    if (error.response) {
      const status = error.response.status;
      if (status === 404) {
        setErrorMessage('Pages not found');
        setErrorStatus(status);
        return {errorMessage, errorStatus}
      } else if (status === 401) {
        setErrorMessage('You do not have access');
        setErrorStatus(status);
        return {errorMessage, errorStatus}
      } else if (status === 400) {
        setErrorMessage('Bad Request');
        return {errorMessage, errorStatus}
        setErrorStatus(status);
      } else if (status === 500) {
        setErrorMessage('An unknown error occurred');
        setErrorStatus(status);
        return {errorMessage, errorStatus}
      }
    } else if (error == 'AxiosError: Network Error') {
      setErrorMessage('Network Error!');
      setErrorStatus(102);
      return {errorMessage, errorStatus}
    } else {
      setErrorMessage('Something went wrong!')
      setErrorStatus('Unknown error');
    }
  };

  return { handleError, errorMessage, errorStatus };
};
export default useErrorHandler;