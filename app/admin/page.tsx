'use client';

import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <button className='btn-primary' type='button' onClick={() => router.push('/verbs')}>
      Clean Verbs Cache
    </button>
  );
}
