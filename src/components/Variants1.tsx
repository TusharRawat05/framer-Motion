import {motion} from 'framer-motion'
import { useState } from 'react'

export const Variants1 = () => {
  const [isVisible, setisVisible] = useState(true)
  return (
    <div className='flex  h-[20rem] items-center justify-center'>
        <motion.div
        className='h-[5rem] w-[5rem] bg-red-600 rounded-full'
        variants={{
            hidden:{opacity:0,scale:0.8},
            visible:{opacity:1,scale:1},
            exit:{ opacity:0,scale:0.5}
        }}
        initial='hiddden'
        animate={isVisible ? 'visible':'hidden'}
        exit='exit'
        transition={{duration:1,
        }}
        onClick={()=>setisVisible(!isVisible)}
        />
    </div>
  )
}
