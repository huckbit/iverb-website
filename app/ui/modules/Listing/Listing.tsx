// import { useQuery, gql } from '@apollo/client';
// import client from '@/apollo-client';

// import type { Verb } from '@lib/definitions';

// const GET_VERBS = gql`
//   query {
//     verbs(limit: 10) {
//       id
//       infinitive
//       past
//       pastParticiple
//     }
//   }
// `;

// const Listing = () => {
//   const { loading, error, data } = useQuery(GET_VERBS, { client });
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>An error fetching the data has occurred!</p>;

//   return (
//     <ul>
//       {data?.verbs?.map((verb: Verb) => (
//         <li key={verb.id}>
//           {verb.infinitive} - {verb.past} - {verb.pastParticiple}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Listing;

import { useQuery, gql } from '@apollo/client';
import client from '@/apollo-client';

import type { Verb, Pagination } from '@lib/definitions';

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

export default function Verbs({ start, end }: Pagination = { start: 1, end: 25 }) {
  const { loading, error, data, refetch } = useQuery(GET_VERBS_SET, { variables: { start, end }, client });
  if (loading) return <p className='text-center'>Loading...</p>;
  if (error) return <p>An error fetching the data has occurred!</p>;
  return (
    <div>
      {data.verbs.map((verb: Verb) => (
        <div key={verb.id}>
          <h2>{verb.infinitive}</h2>
          <p>{verb.past}</p>
          <p>{verb.pastParticiple}</p>
        </div>
      ))}
    </div>
  );
}
