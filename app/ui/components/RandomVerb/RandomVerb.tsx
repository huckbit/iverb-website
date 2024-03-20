import { useEffect } from 'react';
import style from './RandomVerb.module.scss';
import { useQuery, gql } from '@apollo/client';
import client from '@/apollo-client';
import { motion } from 'framer-motion';
import { fadeInVariants } from '@global/motionVariants';
import { Loading } from '@components/Loading';

const GET_RANDOM_VERB = gql`
  query {
    randomVerb {
      infinitive
      past
      pastParticiple
    }
  }
`;

const RandomVerb = () => {
  const { loading, error, data, refetch } = useQuery(GET_RANDOM_VERB, { client });

  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [refetch]);

  if (loading) return <Loading />;
  if (error) return <p>An error fetching the data has occurred!</p>;

  return (
    <div className={style.container}>
      <motion.div variants={fadeInVariants} custom={0} initial='hidden' animate='visible'>
        <div className={style.verbContainer}>
          <span className='text-infinitive text-5xl md:text-6xl font-bold mr-2 font-playfairDisplay'>{data?.randomVerb?.infinitive}</span>
          <span className='text-past text-5xl md:text-6xl font-bold mr-2 font-playfairDisplay'>{data?.randomVerb?.past}</span>
          <span className='text-pastParticiple text-5xl md:text-6xl font-bold font-playfairDisplay'>{data?.randomVerb?.pastParticiple}</span>
        </div>
      </motion.div>
    </div>
  );
};

export default RandomVerb;
