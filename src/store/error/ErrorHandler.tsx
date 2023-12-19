import React, { useState } from 'react';

export interface ErrorType {
  errorMessage: string
  errorStatus: number | string
}

export const useErrorHandler = () => {
  const [error, setError] = useState<ErrorType>()
  const handleError = (error: any) => {
    if (error.response) {
      const status = error.response.status;
      if (status === 404) {
        setError({ errorMessage: 'Pages not found', errorStatus: status });
      } else if (status === 401) {
        setError({ errorMessage: 'You do not have access', errorStatus: status });
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

  return { handleError, error };
};

export default useErrorHandler;