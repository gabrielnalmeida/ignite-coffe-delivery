import styled, { css } from 'styled-components';

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 256px;
  height: 310px;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  
  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
    margin-top: 1rem;
    margin-bottom: .5rem;
  }
  
  p{
    width: 216px;
    font-size: .875rem;
    font-weight: 500;
    line-height: 130%;
    color: ${(props) => props.theme['base-label']};
  }

  img {
    position: relative;
    top: -1rem;
  }
`;

export const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: .25rem;
`;

export const Badge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .25rem .5rem;
  font-size: .625rem;
  font-weight: 700;
  line-height: 130%;
  border-radius: 6.25rem;
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  text-transform: uppercase;
`;

export const PriceTag = styled.div`
  display: flex;
  align-items: center;
  margin-top: 33px;

  h3 {
    color: ${(props) => props.theme['base-text']};
    display: flex;
    align-items: center;
    font-size: .875rem;
    font-weight: 500;
    line-height: 130%;

    strong {
      color: ${(props) => props.theme['base-title']};
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 130%;
    }
  }
`; 

export const ShopButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: .375rem;
    padding: .5rem;
    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['white']};
    cursor: pointer;
`;

export const CustomInputNumber = styled.div`
  display: inline-flex;
  align-items: center;
  border: none;
  overflow: hidden;
  margin-left: 1.4375rem;
  margin-right: .5rem;

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