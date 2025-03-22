import { HeroSection } from "./components/HeroSection";
import { ShoppingSection } from "./components/ShoppingSection";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <HeroSection />
      <ShoppingSection />
    </HomeContainer>
  )
}