'use client';
import CookieConsent from 'react-cookie-consent';
import Link from 'next/link';

export default function GdprBar() {
  return (
    <CookieConsent location='bottom' buttonText='Accept' cookieName='gdpr' style={{ background: '#8a7852' }} buttonStyle={{ background: '#3d5371', color: '#fff', fontSize: '13px' }} expires={150}>
      This website uses cookies to enhance the user experience. By using this website, you agree to the use of cookies.{' '}
      <Link href='https://www.cookiesandyou.com/' target='_blank' rel='noopener noreferrer'>
        Learn more
      </Link>
    </CookieConsent>
  );
}
