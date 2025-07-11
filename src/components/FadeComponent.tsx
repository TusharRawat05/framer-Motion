import {AnimatePresence, easeInOut, motion} from "framer-motion"
import { useState } from "react"

export const FadeComponent = () => {

    const [visible, setvisible] = useState(true)
  return (
    <div className="flex flex-col items-center gap-1.5 ">
        <button className="bg-blue-500 rounded p-4" onClick={()=>setvisible(!visible)}>Toggle Fade</button>
        <AnimatePresence>
        {visible&&(

            <motion.div className="p-4 bg-gray-200 text-black rounded"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration:0.5 ,ease:easeInOut}}
            >
                hlo i am a fading component

            </motion.div>
        )}
        </AnimatePresence>
        <div className="h-[20vh]"></div>
    </div>
    

  )
}
