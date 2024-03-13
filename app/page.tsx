'use client';
import { Button } from '@elements/button';
import { ThemeProvider } from 'styled-components';
import lightTheme from '@theme/lightTheme';
import { Listing } from '@components/listing';

export const Home = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <main className='flex min-h-screen flex-col justify-between p-12'>
        <h1 className='text-center'>Main content</h1>
        <Button variant='secondary'>This is my custom button</Button>
        <Listing />
      </main>
    </ThemeProvider>
  );
};

export default Home;
