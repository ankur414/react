import React from 'react';
import { Settings } from '@mui/icons-material';
import { Box } from '@mui/system';

const SettingsIcon = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: '0.5px',
        right: '0.5px',
        zIndex: '1000', // Ensure the icon is above other elements
        cursor: 'pointer', // Make the icon clickable
      }}
    >
      <Settings />
    </Box>
  );
};

export default SettingsIcon;
