import type { Verb, Pagination } from '@lib/definitions';
import { useVerbs } from '@hooks/useVerbs';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInVariants } from '@global/motionVariants';

export default function VerbsListing({ start, end }: Pagination = { start: 1, end: 10 }) {
  const fadeInWithDelayVariants = {
    hidden: { opacity: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      transition: {
        delay: custom * 0.1,
        duration: 0.1,
      },
    }),
  };

  const { loading, error, data } = useVerbs({ start, end });
  if (loading) return <p className='text-center'>Loading...</p>;
  if (error) return <p>An error fetching the data has occurred!</p>;
  return (
    <div className='flex flex-col items-center mt-5 md:mt-10'>
      {data.verbs.map((verb: Verb, index: number) => (
        <div key={verb.id} className='flex my-1'>
          <motion.p custom={index} variants={fadeInWithDelayVariants} initial='hidden' animate='visible'>
            <Link className='mx-5' href={`/verb/${verb.infinitive}`}>
              <motion.span variants={fadeInVariants}>
                <span className='inline-flex items-center rounded-md bg-infinitive px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10'>{verb.infinitive}</span>{' '}
                <span className='inline-flex items-center rounded-md bg-past px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10'>{verb.past}</span>{' '}
                <span className='inline-flex items-center rounded-md bg-pastParticiple px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10'>{verb.pastParticiple}</span>
              </motion.span>
            </Link>
          </motion.p>
        </div>
      ))}
    </div>
  );
}
