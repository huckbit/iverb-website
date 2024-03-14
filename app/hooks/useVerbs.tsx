import { useQuery, gql } from '@apollo/client';
import client from '@/apollo-client';

import type { Pagination } from '@lib/definitions';

const GET_VERBS_SET = gql`
  query GetVerbs($start: Int!, $end: Int!) {
    verbs(start: $start, end: $end) {
      id
      infinitive
      past
      pastParticiple
    }
  }
`;

export function useVerbs({ start, end }: Pagination = { start: 1, end: 25 }) {
  const { loading, error, data, refetch } = useQuery(GET_VERBS_SET, { variables: { start, end }, client });

  return { loading, data, error, refetch };
}
