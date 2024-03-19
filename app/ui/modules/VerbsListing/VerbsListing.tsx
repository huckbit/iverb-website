import { useVerbs } from '@hooks/useVerbs';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInVariants } from '@global/motionVariants';
import { Card } from '@components/Card';
import type { Verb, Pagination } from '@lib/definitions';

export default function VerbsListing({ start, end }: Pagination) {
  const fadeInWithDelayVariants = {
    hidden: { opacity: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      transition: {
        delay: custom * 0,
        duration: 0.1,
      },
    }),
  };

  const { loading, error, data } = useVerbs({ start: start - 1, end: end - 2 });

  if (loading) return <p className='text-center'>Loading...</p>;
  if (error) return <p>An error fetching the data has occurred!</p>;

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-1 justify-items-center md:px-10'>
      {data.verbs.map((verb: Verb, index: number) => (
        <div key={verb.id} className='flex my-1'>
          <motion.div custom={index} variants={fadeInWithDelayVariants} initial='hidden' animate='visible'>
            <Link className='mx-5' href={`/verb/${verb.infinitive}`}>
              <motion.span variants={fadeInVariants}>
                <Card verb={verb} />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
