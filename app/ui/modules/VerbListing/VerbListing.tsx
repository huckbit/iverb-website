import type { Verb } from '@lib/definitions';
import { useVerb } from '@hooks/useVerb';
import { Block } from '@components/Block';

export default function VerbListing({ infinitive }: { infinitive: string }) {
  const { loading, data, error } = useVerb({ infinitive: infinitive });
  if (loading) return <p className='text-center'>Loading...</p>;
  if (error) return <p>An error fetching the data has occurred!</p>;
  return (
    <div className='flex justify-center gap-3'>
      <Block variant='infinitive'>{data.verbByInfinitive.infinitive}</Block>
      <Block variant='past'>{data.verbByInfinitive.past}</Block>
      <Block variant='pastParticiple'>{data.verbByInfinitive.pastParticiple}</Block>
    </div>
  );
}
