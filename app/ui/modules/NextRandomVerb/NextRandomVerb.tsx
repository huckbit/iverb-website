import style from './style.module.scss';
import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import client from '@/apollo-client';
import { AnimatePresence, motion } from 'framer-motion';
import { Block } from '@components/Block';
import { Button } from '@elements/Button';
import { ForwardIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { fadeInVariants, rotateTextVariants } from '@global/motionVariants';

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
  const [showInfinitive, setShowInfinitive] = useState(true);
  const [key, setKey] = useState(0);
  const { loading, error, data, refetch } = useQuery(GET_RANDOM_VERB, {
    client,
  });

  const handleNext = () => {
    refetch();
    setKey((prevKey) => prevKey + 1);
    setShowInfinitive(false);
    setTimeout(() => {
      setShowInfinitive(true);
      setShowResult(false);
    }, 100);
  };

  return (
    <div className={style.container}>
      {loading ? (
        <p className='text-center'>Loading...</p>
      ) : (
        <>
          <div className={style.verbContainer}>
            <motion.div variants={fadeInVariants} custom={0} initial='hidden' animate='visible'>
              <Block key={key} variant='infinitive'>
                {showInfinitive ? (
                  <motion.span key='text' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {data?.randomVerb?.infinitive}
                  </motion.span>
                ) : (
                  <motion.div key='icon' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {''}
                  </motion.div>
                )}
              </Block>
            </motion.div>
            <motion.div variants={fadeInVariants} custom={1} initial='hidden' animate='visible'>
              <Block key={key} variant='past'>
                {showResult ? (
                  <motion.div variants={rotateTextVariants} custom={0} initial='hidden' animate='visible'>
                    {data?.randomVerb?.past}
                  </motion.div>
                ) : (
                  '?'
                )}
              </Block>
            </motion.div>
            <motion.div variants={fadeInVariants} custom={2} initial='hidden' animate='visible'>
              <Block key={key} variant='pastParticiple'>
                {showResult ? (
                  <motion.div variants={rotateTextVariants} custom={0} initial='hidden' animate='visible'>
                    {data?.randomVerb?.pastParticiple}
                  </motion.div>
                ) : (
                  '?'
                )}
              </Block>
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
      {error && <p>An error fetching the data has occurred!</p>}
    </div>
  );
}
