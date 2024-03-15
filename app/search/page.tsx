'use client';
import { SearchVerb } from '@modules/SearchVerb';

export default function Page() {
  return (
    <div>
      <h1 className='text-center my-5'>Search for a verb</h1>
      <div className='mx-4 md:mx-20'>
        <SearchVerb />
      </div>
    </div>
  );
}
