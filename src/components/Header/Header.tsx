import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { signIn, signOut, useSession } from 'next-auth/react';
import Avatar from '@mui/material/Avatar';
import ThemeToggleButton from '../ThemeToggleButton';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material';
import NextLink from "next/link";

export type HeaderProps = {
  ColorModeContext: React.Context<{toggleColorMode: () => void}>
}

const Header = (props: HeaderProps) => {

  const {ColorModeContext} = props;
  const theme = useTheme();

  const tabletCheck = useMediaQuery('(min-width: 768px)');

  const {data:session} = useSession();
  const userProfileImg = session?.user?.image as string;

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{marginBottom: '40px'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DataSoft
          </Typography>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
        {
          tabletCheck && (
            <Box sx={{paddingRight: 5, marginLeft: "auto"}}>
                <Typography>{session?.user?.email}</Typography>
            </Box>
          )
        }
          <ThemeToggleButton ColorModeContext={ColorModeContext} />
          <Box sx={{ flexGrow: 0 }}>            
            <Tooltip title="Open profile settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={session?.user?.name as string} src={userProfileImg} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <NextLink
                href={'/dashboard/profile'}
                style={{
                  color: theme.palette.text.primary,
                  textDecoration: "none"
                }}
              >
                <Typography textAlign={"center"}>Profile</Typography>
              </NextLink>
                <MenuItem onClick={() => session ? signOut() : signIn()}>
                  <Typography textAlign="center">{session ? 'Logout' : 'Login'}</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
