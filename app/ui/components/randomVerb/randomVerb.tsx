import { useQuery, gql } from '@apollo/client';
import client from '@/apollo-client';

import type { Verb } from '@lib/definitions';

const GET_RANDOM_VERB = gql`
  query {
    randomVerb {
      infinitive
      past
      pastParticiple
    }
  }
`;

const RandomVerb = () => {
  const { loading, error, data } = useQuery(GET_RANDOM_VERB, { client });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error fetching the data has occurred!</p>;

  return (
    <>
      <p>
        {data?.randomVerb?.infinitive} - {data?.randomVerb?.past} - {data?.randomVerb?.pastParticiple}
      </p>
    </>
  );
};

export default RandomVerb;
