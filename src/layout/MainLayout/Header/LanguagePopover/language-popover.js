import React, { useState } from 'react';
import { Avatar, Box, ButtonBase, IconButton, Popover, MenuItem } from '@mui/material';
import Ethio from '../../../../assets/icons/Ethiopian.svg';
import English from '../../../../assets/icons/ic_flag_en.svg'
import Tplf from '../../../../assets/icons/trace.svg'
import { useTheme } from '@mui/material/styles';

const LANGS = [
  {
    value: 'en',
    label: 'English',
    icon: English
  },
  {
    value: 'am',
    label: 'አማረኛ',
    icon: Ethio
  },
  {
    value: 'tig',
    label: 'Tigregna',
    icon: Tplf
  },
];

const LanguagePopover = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState(LANGS[0]);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleSelectLanguage = (selectedLanguage) => {
    setCurrentLanguage(selectedLanguage);
    handleClose();
  };

  return (
    <>
      <Box
        sx={{
          ml: 1,
          mr: 1,
          [theme.breakpoints.down('md')]: {
            mr: 2
          }
        }}
      >
        <ButtonBase sx={{ borderRadius: '12px' }} onClick={handleOpen}>
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: 'all .2s ease-in-out',
              background: theme.palette.secondary.dark,
              backgroundColor: 'rgba(227, 242, 253)',
              color: theme.palette.secondary.dark,
              '&[aria-controls="menu-list-grow"],&:hover': {
                background: 'rgba(33, 150, 243)',
                color: theme.palette.secondary.light
              }
            }}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            color="inherit"
          >
            <IconButton
              onClick={handleOpen}
              sx={{
                width: 40,
                height: 40,
                ...(open && {
                  bgcolor: 'action.selected',
                }),
              }}
            >
              <img src={currentLanguage.icon} width={currentLanguage.icon === Tplf || currentLanguage.icon===English? '25' : 'inherit'}   alt={currentLanguage.value} />
            </IconButton>
          </Avatar>
        </ButtonBase>

        <Popover
          open={!!open}
          anchorEl={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          PaperProps={{
            sx: {
              p: 0,
              mt: 1,
              ml: 0.75,
              width: 180,
            },
          }}
        >
          {LANGS.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === currentLanguage.value}
              onClick={() => handleSelectLanguage(option)}
              sx={{ typography: 'body2', py: 1 }}
            >
              <Box component="img" alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />
              {option.label}
            </MenuItem>
          ))}
        </Popover>
      </Box>
    </>
  );
};

export default LanguagePopover;