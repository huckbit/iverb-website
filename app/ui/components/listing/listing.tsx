import { useQuery, gql } from '@apollo/client';
import client from '@/apollo-client';

import type { Verb } from '@lib/definitions';

const GET_VERBS = gql`
  query {
    verbs(limit: 10) {
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
  if (error) return <p>An error fetching the data has occurred!</p>;

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
