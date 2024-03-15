import type { Verb, Pagination } from '@lib/definitions';
import { useVerbs } from '@hooks/useVerbs';

export default function VerbsListing({ start, end }: Pagination = { start: 1, end: 25 }) {
  const { loading, error, data } = useVerbs({ start, end });
  if (loading) return <p className='text-center'>Loading...</p>;
  if (error) return <p>An error fetching the data has occurred!</p>;
  return (
    <div>
      {data.verbs.map((verb: Verb) => (
        <div key={verb.id}>
          <p>
            {verb.infinitive} - {verb.past} - {verb.pastParticiple}
          </p>
        </div>
      ))}
    </div>
  );
}
