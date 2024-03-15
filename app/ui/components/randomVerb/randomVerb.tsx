import { useEffect } from 'react';
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

/* TODO: add props to differentiate between auto-regenerate / next random */

const RandomVerb = () => {
  const { loading, error, data, refetch } = useQuery(GET_RANDOM_VERB, { client });

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     refetch();
  //   }, 7000);

  //   // Clean up function
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [refetch]);

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
};

export default RandomVerb;
