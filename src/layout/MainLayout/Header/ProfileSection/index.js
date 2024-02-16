import { useState, useRef, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Avatar,
  Box, Button,
  // CardContent,
  Chip,
  ClickAwayListener,
  Divider,
  Grid,
  // InputAdornment,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  // OutlinedInput,
  Paper,
  Popper,
  // Switch,
  Typography
} from '@mui/material';

// third-party
// import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Transitions from 'ui-component/extended/Transitions';
// import UpgradePlanCard from './UpgradePlanCard';
import user from 'assets/images/users/graduate.png';
// assets
import { IconLogout, IconSettings, IconUserCheck } from '@tabler/icons-react';
import { logout } from '../../../../store/constant';

// ==============================|| PROFILE MENU ||============================== //

const ProfileSection = () => {
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [open, setOpen] = useState(false);
  // acess redux
  const dispatch=useDispatch();
// get Datetime login
  const currentDate=new Date();
  const fromattedTime=currentDate.getHours();
  const anchorRef = useRef(null);
  const handleLogout =  () => {
    dispatch(logout());
    window.location.href='/dashboard/default';
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleListItemClick = (event, index, route = '') => {
    setSelectedIndex(index);
    handleClose(event);

    if (route && route !== '') {
      navigate(route);
    }
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Chip
        sx={{
          height: '48px',
          alignItems: 'center',
          borderRadius: '27px',
          transition: 'all .2s ease-in-out',
          borderColor: theme.palette.primary.light,
          // borderWidth = '0px',
          backgroundColor: 'rgb(227, 242, 253)',
          '&[aria-controls="menu-list-grow"], &:hover': {
            borderColor: theme.palette.primary.main,
            background: `${theme.palette.primary.main}!important`,
            color: theme.palette.primary.light,
            '& svg': {
              stroke: theme.palette.primary.light
            }
          },
          '& .MuiChip-label': {
            lineHeight: 0
          }
        }}
        icon={
          <Avatar
            src={user}
            sx={{
              ...theme.typography.mediumAvatar,
              margin: '8px 0 8px 8px !important',
              cursor: 'pointer'
            }}
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            color="inherit"
          />
        }
        label={<IconSettings stroke={1.5} size="1.5rem" color={theme.palette.primary.main} />}
        variant="outlined"
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="primary"
      />
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 14]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <Transitions in={open} {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
                  <Box sx={{ p: 1, display: 'flex' }}>
                    <Box sx={{ pr: 3 }}>
                      <div style={{ width: '70px', height: '70px' }}>
                        <img src={user} width={'70px'} height={'70px'} alt={'photoo'} />
                      </div>
                    </Box>
                    <Box>
                      <Typography component="span" sx={{color:theme.palette.secondary[200]}}>{fromattedTime < 4 ? 'Good Morning' : 'Good Afternoon'},</Typography>
                      <Typography  variant="h4" sx={{ fontWeight: 800 }}>
                        {customization.auth.email}
                      </Typography>
                      <Button  sx={{backgroundColor:'rgba(185, 246, 202, 0.376)', padding: '1px', marginTop:'3px'}}>
                        <Typography variant="subtitle2" sx={{color:'rgb(0, 200, 8)'}}>{customization.auth.role}</Typography>
                      </Button>
                    </Box>
                  </Box>
                    <Box sx={{ p: 2 }}>
                      <Divider />
                      <List
                        component="nav"
                        sx={{
                          width: '100%',
                          maxWidth: 350,
                          minWidth: 300,
                          backgroundColor: theme.palette.background.paper,
                          borderRadius: '10px',
                          [theme.breakpoints.down('md')]: {
                            minWidth: '100%'
                          },
                          '& .MuiListItemButton-root': {
                            mt: 0.5
                          }
                        }}
                      >
                        <ListItemButton
                          sx={{ borderRadius: `${customization.borderRadius}px` }}
                          selected={selectedIndex === 0}
                          onClick={(event) => handleListItemClick(event, 0, '#')}
                        >
                          <ListItemIcon>
                            <IconSettings stroke={1.5} size="1.3rem" color={theme.palette.success.dark}/>
                          </ListItemIcon>
                          <ListItemText primary={<Typography variant="body2">Account Settings</Typography>} />
                        </ListItemButton>
                        <ListItemButton
                          sx={{ borderRadius: `${customization.borderRadius}px` }}
                          selected={selectedIndex === 1}
                          onClick={(event) => handleListItemClick(event, 1, '#')}
                        >
                          <ListItemIcon>
                            <IconUserCheck stroke={1.5} size="1.3rem" color={theme.palette.primary.dark}/>
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Grid container spacing={1} justifyContent="space-between">
                                <Grid item>
                                  <Typography variant="body2">Social Profile</Typography>
                                </Grid>
                                {/*<Grid item>*/}
                                {/*  <Chip*/}
                                {/*    label="02"*/}
                                {/*    size="small"*/}
                                {/*    sx={{*/}
                                {/*      bgcolor: theme.palette.warning.dark,*/}
                                {/*      color: theme.palette.background.default*/}
                                {/*    }}*/}
                                {/*  />*/}
                                {/*</Grid>*/}
                              </Grid>
                            }
                          />
                        </ListItemButton>
                        <ListItemButton
                          sx={{ borderRadius: `${customization.borderRadius}px` }}
                          selected={selectedIndex === 4}
                          onClick={handleLogout}
                        >
                          <ListItemIcon>
                            <IconLogout stroke={1.5} size="1.3rem" color={theme.palette.warning.dark}/>
                          </ListItemIcon>
                          <ListItemText  primary={<Typography variant="body2" sx={{color: theme.palette.warning.dark}}>Logout</Typography>} />
                        </ListItemButton>
                      </List>
                    </Box>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </>
  );
};

export default ProfileSection;
