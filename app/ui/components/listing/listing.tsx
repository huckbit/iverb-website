import { useQuery, gql } from '@apollo/client';
import client from '@/apollo-client';
import { GetServerSideProps } from 'next';

import type { Verb } from '@lib/definitions';

interface VerbsProps {
  verbs: Verb[];
}

const GET_VERBS = gql`
  query {
    verbs {
      id
      infinitive
      past
      pastParticiple
    }
  }
`;

const Listing = () => {
  const { loading, error, data } = useQuery(GET_VERBS, { client });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul>
      {data?.verbs?.map((verb: Verb) => (
        <li key={verb.id}>
          {verb.infinitive} - {verb.past} - {verb.pastParticiple}
        </li>
      ))}
    </ul>
  );
};

export default Listing;
