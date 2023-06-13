import React, { ReactNode, FC } from 'react';
import { MenuItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  to: string;
}

const PageLayoutMenuItem: FC<Props> = function PageLayoutMenuItem({ children, ...props }) {
  return (
    <MenuItem>
      <Typography
        component={Link}
        color="inherit"
        {...props}
        sx={{
          textDecoration: 'none',
        }}
      >
        {children}
      </Typography>
    </MenuItem>
  );
};

export default PageLayoutMenuItem;
