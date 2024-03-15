'use client';
import { NextRandomVerb } from '@modules/NextRandomVerb';
import style from './style.module.scss';

export default function Page() {
  return (
    <div className={style.container}>
      <h1 className='text-center'>Practice your verbs here!</h1>
      <NextRandomVerb />
    </div>
  );
}
