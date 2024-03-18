import style from './Block.module.scss';
import { isLongString } from '@global/utils';

export interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'past' | 'infinitive' | 'pastParticiple';
}

const Block = ({ children, className, variant = 'past', ...rest }: BlockProps) => {
  /**
   * Determines if the children of the component is a long string.
   * A string is considered long if its length exceeds 20 chars.
   *
   * @param children - The children of the component.
   * @returns True if the children is a long string, false otherwise.
   */
  const isLong = typeof children === 'string' && isLongString(children);

  return (
    <div className={`${style.block} ${style[variant]} ${isLong && style.longText}`} {...rest}>
      {children}
    </div>
  );
};

export default Block;
