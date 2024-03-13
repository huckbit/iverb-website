'use client';
import { RandomVerb } from '@components/randomVerb';

export const Home = () => {
  return (
    <main className='flex flex-col justify-between p-12'>
      <h1 className='text-center'>iVerb</h1>
      <article>
        <h2>Welcome to iVerb – Your Ultimate Guide to Mastering 200 Irregular English Verbs!</h2>
        <p>Immerse yourself in a unique learning experience as you explore and search through this collection of must-know irregular verbs.</p>
        <p>Whether you&apos;re a student, language enthusiast, or someone looking to enhance their English skills, iVerb is here to simplify the journey.</p>
        <p>Discover the secrets of irregular verbs easily and improve your language skills with our easy-to-use web app.</p>
        <p>Start your journey with verbs now!</p>
      </article>
      <RandomVerb />
    </main>
  );
};

export default Home;
