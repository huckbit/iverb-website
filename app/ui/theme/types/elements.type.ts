interface ButtonVariant {
  border: string;
  background: string;
  color: string;
  hover?: {
    background?: string;
    color?: string;
  };
}

export type ButtonVariants = 'neutral' | 'primary' | 'secondary';

export default interface Elements {
  button: Record<ButtonVariants, ButtonVariant>;
}
