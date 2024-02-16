import React, { useState } from 'react';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import { Avatar, Box, ButtonBase, Popover, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Branches } from '../../../../store/constant';
import { selecetBranch } from '../../../../store/constant';
import { useDispatch, useSelector } from 'react-redux';
const SwitchBranch = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const selectedBranch =useSelector((state)=>state.customization.selectedBranch);
  const dispatch=useDispatch();
  const handleOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const handleBranchChange = (event) => {
    const selectedValue = event.target.value;
    dispatch(selecetBranch(selectedValue));
    handleClosePopover();
  };

  const open = Boolean(anchorEl);

  return (
    <Box
      sx={{
        ml: 1,
        mr: 1,
        [theme.breakpoints.down('md')]: {
          mr: 2
        }
      }}
    >
      <ButtonBase sx={{ borderRadius: '12px' }} onClick={handleOpenPopover}>
        <Avatar
          variant="rounded"
          sx={{
            ...theme.typography.commonAvatar,
            ...theme.typography.mediumAvatar,
            transition: 'all .2s ease-in-out',
            background: theme.palette.secondary.dark,
            backgroundColor:theme.palette.secondary.light,
            color: theme.palette.secondary.dark,
            '&[aria-controls="menu-list-grow"],&:hover': {
              background: theme.palette.secondary.dark,
              color: theme.palette.secondary.light
            }
          }}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          color="inherit"
        >
          <SyncAltOutlinedIcon fontSize="small" />
        </Avatar>
      </ButtonBase>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box p={2}>
          <RadioGroup value={selectedBranch} onChange={handleBranchChange}>
            {Object.keys(Branches).map((key)=>(
              <FormControlLabel
                key={key}
                value={Branches[key].Name}
                control={<Radio />}
                label={Branches[key].Name}
              />
            ))}
          </RadioGroup>
        </Box>
      </Popover>
    </Box>
  );
};

export default SwitchBranch;
