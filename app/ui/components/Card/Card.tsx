import type { Verb } from '@lib/definitions';
import style from './Card.module.scss';
import { useTheme } from 'next-themes';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { isLongString, truncateWithEllipsis } from '@global/utils';

export default function Card({ verb }: { verb: Verb }) {
  const { resolvedTheme } = useTheme();

  const { infinitive, presentParticiple, past, pastParticiple } = verb;
  return (
    <div className={resolvedTheme === 'light' ? style.cardWrapper : `${style.cardWrapperDark}`}>
      <div>
        <div>
          <h3 className={style.title}>{`To ${infinitive}`}</h3>
          <p>
            {isLongString(past) ? truncateWithEllipsis(past, 10) : past} - {isLongString(pastParticiple) ? truncateWithEllipsis(pastParticiple, 10) : pastParticiple}
          </p>
        </div>
      </div>
      <div className={style.chevronContainer}>
        <ChevronRightIcon className='w-6 h-6' />
      </div>
    </div>
  );
}
