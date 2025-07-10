import {motion} from "framer-motion"
import { useMotionValue, useTransform } from "motion/react"

export const DraggableBox = () => {
    const x=useMotionValue(0)
    const y=useMotionValue(0)
    const backgroundColor=useTransform(x,[-100,100],["#ff0000","#00ff00"])
  return (
    <motion.div drag dragConstraints={{
        left:-200,
        right:200,
        top:-200,
        bottom:200
    }} className="w-32 h-32 flex item-center justify-center rounded-lg shadow-lg cursor-pointer"
    style={{x,y,backgroundColor}}>
        <span className="text-white">Drag me!</span>
    </motion.div>
  )
}
