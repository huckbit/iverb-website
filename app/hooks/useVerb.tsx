import { useQuery, gql } from '@apollo/client';
import client from '@/apollo-client';

const GET_VERB_BY_INFINITIVE = gql`
  query getVerbByInfinitive($infinitive: String!) {
    verbByInfinitive(infinitive: $infinitive) {
      id
      infinitive
      presentParticiple
      past
      pastParticiple
    }
  }
`;

export function useVerb({ infinitive }: { infinitive: string }) {
  const { loading, error, data } = useQuery(GET_VERB_BY_INFINITIVE, {
    variables: { infinitive },
    client,
  });

  return { loading, data, error };
}
