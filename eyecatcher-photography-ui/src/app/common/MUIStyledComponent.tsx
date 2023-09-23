import { Button, buttonClasses } from '@mui/base/Button';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import { blue, grey } from '@mui/material/colors';
import { MenuItem, menuItemClasses } from '@mui/base';
import Chip from '@mui/material/Chip';
import { emphasize } from '@mui/material';

export const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? grey[200]
      : grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip;

export const CustomButton = styled(Button)(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    background-color: ${blue[500]};
    padding: 8px 16px;
    border-radius: 8px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
    box-shadow: 0px 4px 30px;

    &:hover {
    background-color: ${blue[600]};
    }

    &.${buttonClasses.active} {
    background-color: ${blue[700]};
    }

    &.${buttonClasses.focusVisible} {
    box-shadow: 0 3px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
    }

    &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    }
    `,
);

export const StyledListbox = styled('ul')(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    min-width: 200px;
    border-radius: 12px;
    overflow: auto;
    outline: 0px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    z-index: 1;
    `,
  );
  
 export const StyledMenuItem = styled(MenuItem)(
    ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 8px;
    cursor: default;
    user-select: none;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${menuItemClasses.focusVisible} {
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
  
    &.${menuItemClasses.disabled} {
      color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  
    &:hover:not(.${menuItemClasses.disabled}) {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
    `,
  );