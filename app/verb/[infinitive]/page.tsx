'use client';
import { useRouter } from 'next/navigation';
import { VerbListing } from '@modules/VerbListing';
import { Button } from '@elements/Button';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';

export default function Page({ params }: { params: { infinitive: string } }) {
  const infinitive = params.infinitive as string;
  const router = useRouter();

  const goBack = () => {
    if (typeof window !== 'undefined') {
      router.back();
    }
  };

  return (
    <div className='my-2'>
      <div className='page-container'>
        <VerbListing infinitive={infinitive} />
      </div>
      <Button variant='primary' className='mb-10' onClick={goBack}>
        <ArrowLeftCircleIcon className='w-6 h-6 mr-2' />
        Go Back
      </Button>
    </div>
  );
}
