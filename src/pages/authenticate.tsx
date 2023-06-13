import React, { useEffect, useState, FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import redoseClient from '../redose-client';
import PageLoading from '../components/page-loading';

const AuthenticatePage: FC = function AuthenticatePage() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { sessionId } = useParams<{ sessionId: string }>();

  useEffect(() => {
    const ctrl = new AbortController();
    redoseClient.post(`/session/${sessionId}`, {
      signal: ctrl.signal,
    })
      .then(() => {
        navigate('/');
      })
      .catch(() => {
        enqueueSnackbar('Invalid session credentials.', {
          variant: 'error',
        });
        navigate('/unauthenticated');
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      ctrl.abort();
    };
  }, [sessionId]);

  return (
    <PageLoading isOpen={isLoading} />
  );
};

export default AuthenticatePage;
