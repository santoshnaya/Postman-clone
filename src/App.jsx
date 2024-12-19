import Canary from "./components/Canary"
import Code from "./components/Code"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Install from "./components/Install"

import Navbar from "./components/Navbar"
import UpperFooter from "./components/UpperFooter"

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Code />
      <Install />
      <Canary />
      <UpperFooter />
      <Footer/>
    </div>
  )
}
export default App