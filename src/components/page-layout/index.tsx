import React, { useState, ReactNode, FC } from 'react';
import {
  Box,
  Button,
  AppBar,
  Toolbar,
  Avatar,
  List,
  Menu,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ListItem from './list-item';
import MenuItem from './menu-item';

interface Props {
  children: ReactNode;
}

const PageLayout: FC<Props> = function PageLayout({ children }) {
  const [userAnchor, setUserAnchor] = useState<null | HTMLElement>(null);

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      margin={0}
      padding={0}
    >
      <AppBar position="sticky">
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            component={Link}
            to="/"
            fontFamily="monospace"
            fontWeight={700}
            letterSpacing=".3rem"
            color="inherit"
            noWrap
            sx={{
              mr: 2,
              textDecoration: 'none',
            }}
          >
            Spunion
          </Typography>

          <Box flexGrow={1}>
            <List
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <ListItem to="/">Home</ListItem>
              <ListItem to="/guild">Guild</ListItem>
            </List>
          </Box>

          <Box display="flex" alignItems="center">
            <Button
              id="user-menu-toggle"
              variant="text"
              aria-controls={userAnchor ? 'user-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={userAnchor ? 'true' : undefined}
              onClick={(e) => setUserAnchor(e.currentTarget)}
            >
              <Avatar
                src="https://mui.com/static/images/avatar/2.jpg"
                alt="Remy Sharp"
                sx={{ marginRight: 1 }}
              />
              <Typography color="white">SevenCats</Typography>
            </Button>
            <Menu
              id="user-menu"
              anchorEl={userAnchor}
              open={!!userAnchor}
              onClose={() => setUserAnchor(null)}
              MenuListProps={{
                'aria-labelledby': 'user-menu-toggle',
              }}
            >
              <MenuItem to="/me">Profile</MenuItem>
              <MenuItem to="/logout">Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <main>{children}</main>
    </Box>
  );
};

export default PageLayout;
