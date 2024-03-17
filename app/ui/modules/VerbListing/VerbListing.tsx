import { Suspense } from 'react';
import { useVerb } from '@hooks/useVerb';
import { Block } from '@components/Block';
import useDictionaryAPI from '@hooks/useDictionaryAPI';
import { GetServerSidePropsContext } from 'next';

export default function VerbListing({ infinitive }: { infinitive: string }) {
  const { dictionaryData, dictionaryError } = useDictionaryAPI(infinitive);
  const { loading, data, error } = useVerb({ infinitive: infinitive });

  if (loading) return <p className='text-center'>Loading...</p>;
  if (error) return <p>An error fetching the data has occurred!</p>;
  return (
    <div>
      {/* <div>{dictionaryLoading ? <p className='text-center'>Loading...</p> : <p className='text-center'>{dictionaryData && JSON.stringify(dictionaryData)}</p>}</div> */}
      {/* <Suspense>{dictionaryData && JSON.stringify(dictionaryData)}</Suspense> */}
      {dictionaryData && <p>{JSON.stringify(dictionaryData)}</p>}
      <div className='flex flex-col md:flex-row justify-center gap-3'>
        <Block variant='infinitive'>{data.verbByInfinitive.infinitive}</Block>
        <Block variant='past'>{data.verbByInfinitive.past}</Block>
        <Block variant='pastParticiple'>{data.verbByInfinitive.pastParticiple}</Block>
      </div>
    </div>
  );
}
