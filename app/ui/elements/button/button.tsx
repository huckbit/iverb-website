import style from './style.module.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
}

const Button = ({ children, className, variant = 'primary', ...rest }: ButtonProps) => {
  return (
    <button className={`${style.btn} ${style[variant]}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
