'use client';
import { useVerbs } from '@hooks/useVerbs';
import { useState } from 'react';
import { VerbsListing } from '@modules/VerbsListing';
import { Pagination } from '@components/Pagination';

export default function Page() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 20;

  const start = (page - 1) * itemsPerPage + 1;
  const end = page * itemsPerPage;

  const totalItems = 200;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage: number) => setPage(newPage);

  const { loading } = useVerbs({ start, end });

  return (
    <>
      <div className='flex flex-col'>
        <VerbsListing start={start} end={end} />
      </div>
      {!loading && <Pagination page={page} totalPages={totalPages} handlePageChange={handlePageChange} />}
    </>
  );
}
