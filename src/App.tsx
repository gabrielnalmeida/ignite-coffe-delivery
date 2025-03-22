import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { ProductProvider } from './contexts/ProductContext'


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ProductProvider> 
          <Router />
        </ProductProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}