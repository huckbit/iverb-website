import type { Verb } from '@lib/definitions';
import { useVerb } from '@hooks/useVerb';

export default function VerbListing({ infinitive }: { infinitive: string }) {
  const { loading, data, error } = useVerb({ infinitive: infinitive });
  if (loading) return <p className='text-center'>Loading...</p>;
  if (error) return <p>An error fetching the data has occurred!</p>;
  return (
    <div>
      <p>
        {data.verbByInfinitive.infinitive} - {data.verbByInfinitive.past} - {data.verbByInfinitive.pastParticiple}
      </p>
    </div>
  );
}
