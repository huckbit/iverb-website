import type { Verb, Pagination } from '@lib/definitions';
import { useVerbs } from '@hooks/useVerbs';
import Link from 'next/link';

export default function VerbsListing({ start, end }: Pagination = { start: 1, end: 10 }) {
  const { loading, error, data } = useVerbs({ start, end });
  if (loading) return <p className='text-center'>Loading...</p>;
  if (error) return <p>An error fetching the data has occurred!</p>;
  return (
    <div>
      {data.verbs.map((verb: Verb) => (
        <div key={verb.id} className='flex my-1'>
          <Link className='p-2' href={`/verb/${verb.infinitive}`}>
            <span className='inline-flex items-center rounded-md bg-infinitive px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10'>{verb.infinitive}</span>{' '}
            <span className='inline-flex items-center rounded-md bg-past px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10'>{verb.past}</span>{' '}
            <span className='inline-flex items-center rounded-md bg-pastParticiple px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10'>{verb.pastParticiple}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}
