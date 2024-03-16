import style from './style.module.scss';
import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import client from '@/apollo-client';
import { motion } from 'framer-motion';
import { Block } from '@components/Block';
import { Button } from '@elements/Button';
import { ForwardIcon, SparklesIcon } from '@heroicons/react/24/outline';

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
  const [showResult, setShowResult] = useState(false);
  const { loading, error, data, refetch } = useQuery(GET_RANDOM_VERB, { client });
  if (error) return <p>An error fetching the data has occurred!</p>;

  const handleNext = () => {
    refetch();
    setTimeout(() => {
      setShowResult(false);
    }, 100);
  };

  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className={style.container}>
      {loading ? (
        <p className='text-center'>Loading...</p>
      ) : (
        <>
          <div className={style.verbContainer}>
            <motion.div variants={variants} custom={0} initial='hidden' animate='visible'>
              <Block variant='infinitive'>{data?.randomVerb?.infinitive}</Block>
            </motion.div>
            <motion.div variants={variants} custom={1} initial='hidden' animate='visible'>
              <Block variant='past'>{showResult ? data?.randomVerb?.past : '?'}</Block>
            </motion.div>
            <motion.div variants={variants} custom={2} initial='hidden' animate='visible'>
              <Block variant='pastParticiple'>{showResult ? data?.randomVerb?.pastParticiple : '?'}</Block>
            </motion.div>
          </div>
          <div className='flex'>
            <Button onClick={() => setShowResult(true)}>
              Show
              <SparklesIcon className='ml-2 h-6 w-6' />
            </Button>
            <Button onClick={handleNext}>
              Next
              <ForwardIcon className='ml-2 h-6 w-6' />
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
