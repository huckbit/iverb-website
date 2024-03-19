import Link from 'next/link';

export default function Page() {
  return (
    <article className='md:leading-10 pt-10 md:mt-10'>
      <h1>About iVerb</h1>
      <p>
        Welcome to iVerb, the ultimate resource for mastering British English irregular verbs! Developed by Max with a passion for tech but also language learning, iVerb is designed to empower
        learners of all levels to conquer the nuances of irregular verb usage with ease.
      </p>
      <p>
        With iVerb, you gain access to a comprehensive database of the most common irregular verbs in British English, meticulously curated and organized for efficient learning. From essential verb
        forms to conjugation tables and usage examples, our app provides everything you need to enhance your language skills and communicate confidently in English.
      </p>
      <p>
        What sets iVerb apart is its user-friendly interface and interactive features, including quizzes and exercises tailored to reinforce your understanding of irregular verbs. Whether you&apos;re
        a student preparing for exams, an ESL learner striving for fluency, or simply someone passionate about language, iVerb is your go-to tool for mastering British English grammar.
      </p>
      <p>
        Follow the{' '}
        <Link
          target='_blank'
          href={'https://twitter.com/HuckBIT'}
          rel='noopener noreferrer'
          className='text-primary dark:text-pastParticiple underline hover:no-underline hover:text-gray-500 font-playfairDisplay'
        >
          author
        </Link>{' '}
        to stay updated on the latest app developments, language tips, and more. Join our community of language enthusiasts and embark on your journey to linguistic excellence with iVerb today!
      </p>
      <p>
        This version provides a more focused and relevant description of the app&apos;s capabilities and encourages users to engage with the author and the app&apos;s community on social media
        platforms.
      </p>
    </article>
  );
}
