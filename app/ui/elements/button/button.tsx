import { Container } from './button.styled';
import type { ButtonVariants } from '@theme/types/elements.type';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariants;
}

const Button = ({ children, className, variant = 'primary', ...rest }: ButtonProps) => {
  return (
    <Container $variant={variant} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
