import { Contacto } from "./components/Contacto";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Servicios } from "./components/Servicios";
import { Sobre } from "./components/Sobre";
import { Tecnologias } from "./components/Tecnologias";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Servicios />
      <Sobre />
      <Tecnologias />
      <Contacto />
      <Footer />
    </>
  )
}