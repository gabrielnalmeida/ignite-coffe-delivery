import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 100vw;
  height: 100vh;

  background: ${(props) => props.theme['white']};

  display: flex;
  flex-direction: column;
`