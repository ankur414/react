import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function TextButtons() {
  return (
    <Box sx={{ marginTop: '1px',marginBottom:'1px', display: 'flex', justifyContent: 'flex-end' }}>
      <Stack direction="row" spacing={2} sx={{ width: '81%' }}>
        <Button>Orders x</Button>
      </Stack>
    </Box>
  );
}
