import styled from 'styled-components';

export const ShoppingContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 10rem;
`;

export const SectionTitle = styled.h2`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 130%;
  margin-bottom: 1.125rem;
`;

export const AddressSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: .75rem;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  background-color: ${props => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
  flex-direction: column;
  gap: 1rem;
`;

export const FormHeader = styled.div`
  display: flex;
  gap: .25rem;
`;

export const FormTitle = styled.h3`
  font-size: 1rem;
  color: ${props => props.theme['base-subtitle']};
  font-weight: 400;
`;

export const FormSubtitle = styled.p`
  font-size: .875rem;
  color: ${props => props.theme['base-text']};
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 12px;
`;

// Input REceb quantas Colunas ocupa na grid
export const FormInput = styled.input<{ gridColumns?: number }>`
  padding: .75rem;
  color: ${props => props.theme['base-text']};
  background-color: ${props => props.theme['base-input']};
  border: 1px solid ${props => props.theme['base-button']};
  border-radius: 4px;
  grid-column: span ${props => props.gridColumns || 12};

  &:focus {
    box-shadow: 0 0 0 2px ${props => props.theme['yellow-dark']};
    outline: none;
  }
`;

export const ProductSection = styled.section`
  display: flex;
  background-color: ${props => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px 44px 6px 44px;
  flex-direction: column;
  gap: 1rem;
`;

export const FormSection = styled.section`
  width: 640px;
`;

export const ShoppingItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme["base-button"]};
  margin: 1.5rem 0;
`;

export const CartFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const CartDetails = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: .875rem;
    color: ${(props) => props.theme['base-text']};
  }

  span {
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
  }
`;

export const CartFullPrice = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
  font-weight: bold;
  color: ${(props) => props.theme['base-subtitle']};
`;

export const ConfirmBuyButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: ${(props) => props.theme['yellow']};
  color: ${(props) => props.theme['white']};
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`;
