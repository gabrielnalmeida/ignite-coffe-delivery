import { css, styled } from "styled-components";
import backgroundImage from '../../../../assets/hero-background.svg'

export const HeroContainer = styled.section`
  width: 100%;
  height: 34rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;

  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const HeroText = styled.div`
  display: block;
  width: 36.75rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
    margin-top: 1rem;
  }

  
`;

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 4.125rem;
  row-gap: 1.25rem;
`

interface HeroContentChildrenProps {
  variant: 'yellow-dark' | 'yellow' | 'purple' | 'gray';
}

export const HeroContentChildren = styled.div<HeroContentChildrenProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 50%;
    color: ${props => props.theme['white']};

    ${props => props.variant === 'yellow-dark' && css`
      background-color: ${props.theme['yellow-dark']};
    `}

    ${props => props.variant === 'yellow' && css`
      background-color: ${props.theme['yellow']};
    `}

    ${props => props.variant === 'purple' && css`
      background-color: ${props.theme['purple']};
    `}

    ${props => props.variant === 'gray' && css`
      background-color: ${props.theme['base-text']};
    `}
  }
  
  p {
    font-size: 1rem;
    margin-top: 0;
  }
`;
