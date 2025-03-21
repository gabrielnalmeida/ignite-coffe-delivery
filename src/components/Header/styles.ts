import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;

  nav {
    display: flex;
    gap: 0.5rem;
  }
`

interface ButtonProps {
  variant: 'primary' | 'secondary';
}

export const Button = styled.button<ButtonProps>`
  font-size: 0.875rem;
  font-weight: 400;
  padding: 0.5rem;
  border: none;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  ${props => props.variant === 'primary' && css`
    background: ${props.theme['purple-light']};
    color: ${props.theme['purple-dark']};
  `}

  ${props => props.variant === 'secondary' && css`
    background: ${props.theme['yellow-light']};
    color: ${props.theme['yellow-dark']};
  `}
`