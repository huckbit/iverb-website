'use client';
import { useVerbs } from '@hooks/useVerbs';
import { useState } from 'react';
import { VerbsListing } from '@modules/VerbsListing';
import { Pagination } from '@components/Pagination';

export default function Page() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 40;

  const start = (page - 1) * itemsPerPage + 1;
  const end = page * itemsPerPage;

  const totalItems = 200;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage: number) => setPage(newPage);

  const { loading } = useVerbs({ start, end });

  return (
    <div className='pt-10'>
      <h2 className='mt-10 font-playfairDisplay text-5xl'>Irregular verbs list</h2>
      <p>Click on any verb to explore its details, including various forms, conjugations, meaning.</p>
      <VerbsListing start={start} end={end} />
      <div className='my-5'>
        {!loading && (
          <div className='my-10'>
            <Pagination page={page} totalPages={totalPages} handlePageChange={handlePageChange} />
          </div>
        )}
      </div>
    </div>
  );
}
