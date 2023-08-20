import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const PublicLayout = ({ children }) => {

  return (
    <>




      <CssBaseline />
   <Container maxWidth="xl">
        <Box sx={{  height: '100vh' }} > {children}</Box>
      </Container>
    </>
  );
};
export default PublicLayout;
