import style from './style.module.scss';
import { useQuery, gql } from '@apollo/client';
import client from '@/apollo-client';
import { Block } from '@components/Block';
import { Button } from '@elements/Button';
import { ForwardIcon } from '@heroicons/react/24/outline';

const GET_RANDOM_VERB = gql`
  query {
    randomVerb {
      infinitive
      past
      pastParticiple
    }
  }
`;

export default function NextRandomVerb() {
  const { loading, error, data, refetch } = useQuery(GET_RANDOM_VERB, { client });

  if (loading) return <p className='text-center'>Loading...</p>;
  if (error) return <p>An error fetching the data has occurred!</p>;

  return (
    <div className={style.container}>
      <div className={style.verbContainer}>
        <Block variant='infinitive'>{data?.randomVerb?.infinitive}</Block>
        <Block variant='past'>{data?.randomVerb?.past}</Block>
        <Block variant='pastParticiple'>{data?.randomVerb?.pastParticiple}</Block>
      </div>
      <Button onClick={() => refetch()}>
        Next
        <ForwardIcon className='ml-2 h-6 w-6' />
      </Button>
    </div>
  );
}
