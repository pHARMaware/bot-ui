import { useEffect, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import type { AxiosError } from 'axios';
import redoseClient from '../redose-client';

const RedoseClientInterceptors: FC = function RedoseClientInterceptors() {
  const navigate = useNavigate();

  useEffect(() => {
    const resInterceptorId = redoseClient.interceptors.response.use(
      (res) => res,
      (ex: AxiosError) => {
        if (ex.isAxiosError) {
          if (ex.response?.status === 301) navigate('/unauthenticated');
        } else console.log(ex);
        return Promise.reject(ex);
      },
    );

    return () => {
      redoseClient.interceptors.response.eject(resInterceptorId);
    };
  });

  return null;
};

export default RedoseClientInterceptors;
