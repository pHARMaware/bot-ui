import React, { FC } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

interface Props {
  isOpen: boolean;
}

const PageLoading: FC<Props> = function PageLoading({ isOpen }) {
  return (
    <Backdrop
      open={isOpen}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default PageLoading;
