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
          <Button onClick={handlePrevious} disabled={page === 1}>
            Previous
          </Button>
          <Button onClick={handleNext}>Next</Button>
        </div>
      )}
    </>
  );
}
