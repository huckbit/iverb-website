import { useState, useEffect } from 'react';
import { useVerb } from '@/app/hooks/useVerb';
import { Search } from '@components/Search';
import { Block } from '@components/Block';
import { Loading } from '@components/Loading';

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default function SearchVerb() {
  const [infinitive, setInfinitive] = useState('');
  const [showNoResults, setShowNoResults] = useState(false);
  const debouncedInfinitive = useDebounce(infinitive, 500);

  /* Using the custom Hook to get the verb */
  const { loading, data, error } = useVerb({ infinitive: debouncedInfinitive.toLowerCase() });

  /* Showing the message with some delay if the verb has not been found */
  useEffect(() => {
    if (!loading && !data?.verbByInfinitive?.infinitive && infinitive !== '') {
      const timer = setTimeout(() => {
        setShowNoResults(true);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setShowNoResults(false);
    }
  }, [loading, data, infinitive]);

  return (
    <div className='min-h-[500px] lg:min-h-[300px]'>
      <Search inputValue={infinitive} setInputValue={setInfinitive} placeholder='Search for a verb' />
      {loading && (
        <div className='my-4'>
          <Loading />
        </div>
      )}
      {error && <p>An error fetching the data has occurred!</p>}
      {showNoResults && (
        <p className='text-center my-4 text-xl'>
          No results found for &ldquo;<span className='text-primary'>{infinitive}</span>&ldquo;, please try with another infinitive verb.
        </p>
      )}
      {data?.verbByInfinitive?.infinitive && (
        <div className='flex flex-col md:flex-row justify-center gap-y-3 lg:gap-3 mt-5 md:mt-10'>
          <Block variant='infinitive'>{data?.verbByInfinitive?.infinitive}</Block>
          <Block variant='past'>{data?.verbByInfinitive?.past}</Block>
          <Block variant='pastParticiple'>{data?.verbByInfinitive?.pastParticiple}</Block>
        </div>
      )}
    </div>
  );
}
