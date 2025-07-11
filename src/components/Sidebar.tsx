import  { useState } from 'react'
import { motion } from 'framer-motion'

export const Sidebar = () => {
    const [open, setopen] = useState<boolean>(false)
  return (
    <div className='flex'>
        <button className='bg-blue-400 rounded-2xl ml-[45%] p-4 ' onClick={()=>setopen(!open)}>Toggle Sidebar</button>
        <motion.div className={`fixed left-0 top-0 h-full bg-gray-700 text-white p-4 ${open? "":"-translate-x-full"}`}
        initial={{x:"-100%"}}
        animate={{x:open? "0%":"-100%"}}
        transition={{duration:0.5}}>
        <h2 className='text-lg font-bold'>Sidebar</h2>
        <p> Some random content that will go here</p>

        </motion.div>

    </div>
  )
}
