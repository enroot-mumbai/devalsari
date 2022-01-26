import type { NextPage } from 'next'


const Home: NextPage = () => {
  return (
    <div>
    Homepage
    <p>
      
      <a href = "http://localhost:3000/">  Home  |</a>
      <a rel="noreferrer" href = "http://localhost:3000/about"  >|  About Us  |</a> 
      <a rel="noreferrer" href = "http://localhost:3000/activities"  >|  Activities  |</a> 
      <a rel="noreferrer" href = "http://localhost:3000/ecotourism"  >|  Ecotourism  |</a>
      <a rel="noreferrer" href = "http://localhost:3000/contact"  >|  Contact Us  </a> 
      
      
      
    </p>
    </div>
  )
}

export default Home
