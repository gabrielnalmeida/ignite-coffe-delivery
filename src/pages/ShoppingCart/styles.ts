import styled from 'styled-components';

export const ShoppingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10rem;
  width: 1120px;
`;

export const SectionTitle = styled.h2`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 130%;
`;

export const AddressSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: .75rem;
`;

export const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 12px;
`;

const BaseInput = styled.input`
  padding: .75rem;
  color: ${props => props.theme['base-text']};
  background-color: ${props => props.theme['base-input']};
  border: 1px solid ${props => props.theme['base-border']};
  border-radius: 4px;
  box-shadow: 0;
`;

export const SoloInput = styled(BaseInput)`
  grid-column: span 12;
`;

export const DuoInput = styled(BaseInput)`
  grid-column: span 6;
`;

export const TrioInput = styled(BaseInput)`
  grid-column: span 4;
`;

export const ProductSection = styled.section`
  
`;

export const ProductsCard = styled.div`
  
`;

