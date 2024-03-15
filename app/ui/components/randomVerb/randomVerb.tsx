import { useEffect } from 'react';
import style from './style.module.scss';
import { useQuery, gql } from '@apollo/client';
import client from '@/apollo-client';

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 7000);

    // Clean up function
    return () => {
      clearInterval(intervalId);
    };
  }, [refetch]);

  if (loading) return <p className='text-center'>Loading...</p>;
  if (error) return <p>An error fetching the data has occurred!</p>;

  return (
    <div className={style.container}>
      <div className={style.verbContainer}>
        <span className='text-infinitive text-5xl md:text-6xl font-bold mr-2 font-playfairDisplay'>{data?.randomVerb?.infinitive}</span>
        <span className='text-past text-5xl md:text-6xl font-bold mr-2 font-playfairDisplay'>{data?.randomVerb?.past}</span>
        <span className='text-pastParticiple text-5xl md:text-6xl font-bold font-playfairDisplay'>{data?.randomVerb?.pastParticiple}</span>
      </div>
    </div>
  );
};

export default RandomVerb;
