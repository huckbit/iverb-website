'use client';
import { RandomVerb } from '@components/RandomVerb';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className='flex flex-col justify-between p-12'>
      <article className='md:leading-relaxed md:mt-10 md:mx-20'>
        <div className='md:leading-loose'>
          <h1 className='font-playfairDisplay md:text-5xl'>Welcome to iVerb </h1>
          <h2 className='font-playfairDisplay italic'>– Your Ultimate Guide to Mastering 200 Irregular English Verbs!</h2>
        </div>
        <div className='md:leading-loose mt-2 md:mt-4 space-y-3'>
          <p className='md:text-xl leading-loose'>
            Immerse yourself in a unique learning experience as you explore and search through this collection of must-know irregular verbs. Whether you&apos;re a student, language enthusiast, or
            someone looking to enhance their English skills, iVerb is here to simplify the journey.
          </p>
          <p className='md:text-xl leading-loose'>Discover the secrets of irregular verbs easily and improve your language skills with our easy-to-use web app.Start your journey with verbs now!</p>
          <p className='mt-4 md:text-xl leading-loose'>Check this out! Do you know the following conjugation? </p>
        </div>
      </article>
      <div className='mt-5'>
        <RandomVerb />
      </div>
      <div className='md:leading-loose md:mt-10 md:ml-20'>
        <p className='md:text-xl'>
          You, can{' '}
          <Link className='text-primary hover:text-gray-500 font-playfairDisplay text-xl' href='/verbs'>
            study
          </Link>
          ,{' '}
          <Link href='/practice' className='text-primary hover:text-gray-500 font-playfairDisplay text-xl'>
            practice
          </Link>{' '}
          and{' '}
          <Link href='/test' className='text-primary hover:text-gray-500 font-playfairDisplay text-xl'>
            test
          </Link>{' '}
          your knowledge of irregular verbs with iVerb.
        </p>
      </div>
    </main>
  );
}
