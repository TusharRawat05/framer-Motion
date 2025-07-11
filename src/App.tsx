
import './App.css'
import { Animatedcard } from './components/Animatedcard'
import { BouncingLoader } from './components/BouncingLoader'
import { DraggableBox } from './components/DraggableBox'
import { FadeComponent } from './components/FadeComponent'
import { FlippingCards } from './components/FlippingCards'
import { PulsingButton } from './components/PulsingButton'
import { Sidebar } from './components/Sidebar'
import { Variants1 } from './components/Variants1'

function App() {


  return (
    <>
      <div className='flex  flex-col gap-x-4 '>
      <PulsingButton/>
      <BouncingLoader/>
      <Variants1/>
      <FlippingCards/>
      <Animatedcard/>
      <DraggableBox/>
      <FadeComponent/>
      <Sidebar/>
      </div>
    </>
  )
}

export default App
