import style from './style.module.scss';
import { useQuery, gql } from '@apollo/client';
import client from '@/apollo-client';
import { Block } from '@components/Block';
import { Button } from '@elements/Button';

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
      <Button onClick={() => refetch()}>Refresh</Button>
    </div>
  );
}
