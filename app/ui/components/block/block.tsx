import style from './style.module.scss';

export interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'past' | 'infinitive' | 'pastParticiple';
}

const Block = ({ children, className, variant = 'past', ...rest }: BlockProps) => {
  return (
    <div className={`${style.block} ${style[variant]}`} {...rest}>
      {children}
    </div>
  );
};

export default Block;
