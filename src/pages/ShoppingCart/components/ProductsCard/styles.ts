import styled, { css } from "styled-components";

export const Image = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const Product = styled.section`
  display: flex;
  width: 368px;
  gap: 1rem;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ProductHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductTitle = styled.h4`
  font-size: 1rem;
  color: ${props => props.theme['base-subtitle']};
  font-weight: 400;
`;

export const ProductPrice = styled.span`
  font-size: 1rem;
  color: ${props => props.theme['base-text']};
  font-weight: 700;
`;

export const ProductActions = styled.footer`
  display: flex;
  gap: 0.5rem;
`;

export const CustomInputNumber = styled.div`
  display: inline-flex;
  align-items: center;
  border: none;
  overflow: hidden;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme['base-button']};
    border: none;
    width: 1.46875rem;
    padding: 9.5px 0;
    font-size: 1rem;
    text-align: center;
  }
`;

interface CustomInputNumberButtonProps {
  variant: 'plus' | 'minus';
}

export const CustomInputNumberButton = styled.button<CustomInputNumberButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  box-shadow: none;
  cursor: pointer;
  
  padding-left: .5rem;
  
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['purple']};

  &:-moz-focus-inner {
    border: 0;
  }

  ${(props) => props.variant === 'plus' && css`
    padding: 0.75rem 0.5rem 0.75rem 0;
    border-radius: 0 .375rem .375rem 0;
  `}

  ${(props) => props.variant === 'minus' && css`
    padding: 0.75rem 0 0.75rem 0.5rem;
    border-radius: .375rem 0 0 .375rem;
  `}
`;

export const RemoveItemButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  color: ${(props) => props.theme['base-text']};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  svg {
    color: ${(props) => props.theme['purple']};
  }
`;
