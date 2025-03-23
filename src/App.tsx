import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { ProductProvider } from './contexts/ShoppingContext'
import { CustomerProvider } from './contexts/CustomerContext'


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CustomerProvider>
          <ProductProvider> 
            <Router />
          </ProductProvider>
        </CustomerProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}