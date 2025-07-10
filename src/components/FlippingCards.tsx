import {motion} from 'framer-motion'
import { useState } from 'react'


export const FlippingCards = () => {
    const [isFlipped, setIsFlipped] =useState<boolean>(false)
  return (
    <div className="flex justify-center items-center h-[20rem]">
      <div
        className="relative w-64 h-40 perspective-1000"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Card Container */}
        <motion.div
          className="absolute w-full h-full transition-transform duration-700 preserve-3d"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
        >
          {/* Front Side */}
          <div className="absolute w-full h-full bg-blue-500 text-white flex items-center justify-center">
            Front Side
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full bg-red-500 text-white flex items-center justify-center rotate-y-180 backface-hidden">
            Back Side
          </div>
        </motion.div>
      </div>
    </div>
  )
}
