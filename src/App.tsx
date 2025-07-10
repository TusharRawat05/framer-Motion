
import './App.css'
import { Animatedcard } from './components/Animatedcard'
import { BouncingLoader } from './components/BouncingLoader'
import { DraggableBox } from './components/DraggableBox'
import { FlippingCards } from './components/FlippingCards'
import { PulsingButton } from './components/PulsingButton'
import { Variants1 } from './components/Variants1'

function App() {


  return (
    <>
      <PulsingButton/>
      <BouncingLoader/>
      <Variants1/>
      <FlippingCards/>
      <Animatedcard/>

      <DraggableBox/>
      
    </>
  )
}

export default App
