'use client';
import { useVerbs } from '@hooks/useVerbs';
import { useState } from 'react';
import { Listing } from '@modules/Listing';
import { Button } from '@elements/Button';

export default function Verbs() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 20;

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
        <Listing start={start} end={end} />
      </div>
      {!loading && (
        <div>
          <button role='button' className='btn btn-primary mr-3' onClick={handlePrevious} disabled={page === 1}>
            Previous
          </button>
          <button role='button' className='btn btn-primary' onClick={handleNext} disabled={page === totalPages}>
            Next
          </button>
        </div>
      )}
      {page === totalPages && <p className='text-red-600'>End of list</p>}
    </>
  );
}
