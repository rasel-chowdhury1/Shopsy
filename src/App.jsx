
import { useEffect } from 'react';
import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Products from './Components/Products/Products'
import AOS from 'aos';
import 'aos/dist/aos.css'
import TopProducts from './Components/TopProducts/TopProducts';

function App() {
  useEffect(() =>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    });
    AOS.refresh()
  }, [])

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Products></Products>
      <TopProducts></TopProducts>
    </>
  )
}

export default App
