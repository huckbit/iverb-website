'use client';
import { useRouter } from 'next/navigation';
import { VerbListing } from '@modules/VerbListing';

export default function Page({ params }: { params: { infinitive: string } }) {
  const infinitive = params.infinitive as string;
  const router = useRouter();

  const goBack = () => {
    if (typeof window !== 'undefined') {
      router.back();
    }
  };

  return (
    <>
      <button className='btn-primary' type='button' onClick={goBack}>
        Go Back
      </button>
      <VerbListing infinitive={infinitive} />
    </>
  );
}
