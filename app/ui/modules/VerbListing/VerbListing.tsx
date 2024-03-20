import { useState, useEffect } from 'react';
import { useVerb } from '@hooks/useVerb';
import { Block } from '@components/Block';
import { Loading } from '@components/Loading';
import useDictionaryAPI from '@hooks/useDictionaryAPI';
import type { DictionaryData } from '@lib/definitions';

interface DictionaryAPIResult {
  dictionaryData: DictionaryData[] | null;
  dictionaryError: Error | null;
}

export default function VerbListing({ infinitive }: { infinitive: string }) {
  const [dictionaryData, setDictionaryData] = useState<DictionaryData[] | null>(null);
  const [dictionaryError, setDictionaryError] = useState<Error | null>(null);
  const { loading: verbLoading, data, error } = useVerb({ infinitive: infinitive });

  const dictionaryAPIResult: DictionaryAPIResult = useDictionaryAPI(infinitive);

  const loading = verbLoading;

  useEffect(() => {
    setDictionaryData(dictionaryAPIResult?.dictionaryData);
    setDictionaryError(dictionaryAPIResult?.dictionaryError);
  }, [infinitive, dictionaryAPIResult?.dictionaryData, dictionaryAPIResult?.dictionaryError]);

  if (loading) return <Loading />;
  if (error) return <p>An error fetching the data has occurred!</p>;
  return (
    <div>
      {dictionaryData && <h2 className='text-center my-5 font-playfairDisplay md:mx-12'>{dictionaryData[0]?.meanings[0].definitions[0].definition}</h2>}
      <div className='flex flex-col lg:flex-row justify-center gap-3'>
        <Block variant='infinitive'>{data.verbByInfinitive.infinitive}</Block>
        <Block variant='past'>{data.verbByInfinitive.past}</Block>
        <Block variant='pastParticiple'>{data.verbByInfinitive.pastParticiple}</Block>
      </div>
    </div>
  );
}
