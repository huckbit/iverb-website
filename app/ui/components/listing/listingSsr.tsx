import { gql } from '@apollo/client';
import { GetServerSideProps } from 'next';
import client from '@/apollo-client';

import type { Verb } from '@lib/definitions';

interface VerbsProps {
  verbs: Verb[];
}

export const getServerSideProps: GetServerSideProps<VerbsProps> = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        verbs {
          id
          infinitive
          past
          pastParticiple
        }
      }
    `,
  });

  console.log('data:', data);
  return {
    props: {
      verbs: data.verbs,
    },
  };
};
