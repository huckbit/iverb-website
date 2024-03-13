import styled, { css } from 'styled-components';
import { ButtonVariants } from '@theme/types/elements.type';

export const Container = styled.button<{ $variant: ButtonVariants }>`
  ${({ theme, $variant }) => css`
    background-color: ${theme.elements.button[$variant].background};
    color: ${theme.colors.text.hex};
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    &:hover {
      background-color: ${theme.colors.primary.tints[0].hex};
    }
  `}
`;
