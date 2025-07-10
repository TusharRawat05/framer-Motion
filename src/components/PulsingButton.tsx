import { easeInOut, motion} from 'framer-motion'

export const PulsingButton = () => {
  return (
    <div className='flex h-[30rem] items-center justify-center'>
    <motion.button
    className='px-4 py-2 text-white bg-blue-500 rounded outline-none '   
    animate={{
        scale:[1,1.1,1],
        backgroundColor:['#3b82f6',"#60a5fa","#3b82f6"]

    }} 
    transition={{
        repeat:Infinity,
        ease:easeInOut,
        duration:1
    }}
    >Click Me</motion.button>
    </div>
  )
}
