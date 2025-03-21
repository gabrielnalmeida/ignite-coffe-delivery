import { Button, HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import LogoSVG from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={LogoSVG} alt="Logo" />
      </span>
      <nav>
        <Button variant='primary'>
          <MapPin size={22} weight='fill' fill='#8047F8' />
          Porto Alegre, RS
        </Button>
        <Button variant='secondary'>
          <ShoppingCart size={22} weight='fill' />
        </Button>
      </nav>
    </HeaderContainer>
  )
}