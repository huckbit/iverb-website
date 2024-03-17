'use client';
import { NextRandomVerb } from '@modules/NextRandomVerb';
import style from './style.module.scss';

export default function Page() {
  return (
    <div className={style.container}>
      <NextRandomVerb />
    </div>
  );
}
