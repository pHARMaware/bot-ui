import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';

const NotFoundPage: FC = function NotFoundPage() {
  return (
    <Box
      display="flex"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h1" textAlign="center">404 &bull; Not Found</Typography>
    </Box>
  );
};

export default NotFoundPage;
