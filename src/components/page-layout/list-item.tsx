import React, { ReactNode, FC } from 'react';
import { Typography, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  to: string;
}

const PageLayoutListItem: FC<Props> = function PageLayoutListItem({ children, to }) {
  return (
    <ListItem sx={{ width: 'auto' }}>
      <Typography
        component={Link}
        to={to}
        color="inherit"
        sx={{
          textDecoration: 'none',
        }}
      >
        <ListItemText color="inherit">{children}</ListItemText>
      </Typography>
    </ListItem>
  );
};

export default PageLayoutListItem;
