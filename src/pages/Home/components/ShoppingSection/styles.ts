import styled from "styled-components";

export const ShoppingContainer = styled.section`
  padding: 0 10rem;
`;

export const ShoppingContainerTitle = styled.h2`
  margin-bottom: 3.375rem;
  font-family: 'Baloo 2', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  line-height: 130%;
`;

export const ShoppingItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2.5rem;
`;


