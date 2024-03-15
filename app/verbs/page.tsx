'use client';
import { useVerbs } from '@hooks/useVerbs';
import { useState } from 'react';
import { VerbsListing } from '@modules/VerbsListing';
import { Button } from '@elements/Button';

export default function Verbs() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const start = (page - 1) * itemsPerPage + 1;
  const end = page * itemsPerPage;

  const totalItems = 200;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNext = () => setPage(page + 1);
  const handlePrevious = () => setPage(page - 1);

  const { loading } = useVerbs({ start, end });

  return (
    <>
      <div className='flex flex-col'>
        <VerbsListing start={start} end={end} />
      </div>
      {!loading && (
        <div className='mt-3 md:mt-6 flex flex-row items-center justify-center'>
          <Button onClick={handlePrevious} disabled={page === 1}>
            Previous
          </Button>
          <Button className='btn btn-primary' onClick={handleNext} disabled={page === totalPages}>
            Next
          </Button>
        </div>
      )}
      {page === totalPages && <p className='text-red-600'>End of list</p>}
    </>
  );
}
