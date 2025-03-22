import { Button, HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import LogoSVG from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { ItemCounter } from './components/ItemCounter'

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
        <NavLink to='/cart'>
          <Button variant='secondary'>
            <ItemCounter />
            <ShoppingCart size={22} weight='fill' />
          </Button>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}