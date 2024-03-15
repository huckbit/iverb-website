'use client';
import { VerbListing } from '@modules/VerbListing';

export default function Page({ params }: { params: { infinitive: string } }) {
  const infinitive = params.infinitive as string;

  return (
    <>
      <VerbListing infinitive={infinitive} />
    </>
  );
}
