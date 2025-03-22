import styled from 'styled-components';

export const ItemCounterContainer = styled.div`
  position: relative;
`;

export const ItemCounterBadge = styled.span`
  position: absolute;
  background-color:  ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme['white']};
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  top: -1.75rem;
  right: -2.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  z-index: 1;
`;