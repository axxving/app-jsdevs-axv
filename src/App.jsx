import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Servicios } from "./components/Servicios"
import { Sobre } from "./components/Sobre"

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Servicios />
      <Sobre />
    </>
  )
}