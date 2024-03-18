import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-light-800 dark:bg-slate-800 text-center py-5'>
      <p className='text-sm'>© {currentYear} iVerb. All rights reserved.</p>
    </footer>
  );
}
