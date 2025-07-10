import {easeInOut, motion} from'framer-motion'

export const BouncingLoader = () => {
  return (
    <motion.div
    className='flex justify-center items-center space-x-2'
    >
        {[...Array(3)].map((_,index)=>(
            <motion.div
            key={index}
            className='w-4 h-4 bg-teal-500 rounded-full'
            animate={{y:[0,-15,0]}}
            transition={{
                duration:.9,
                ease:easeInOut,
                repeat:Infinity,
                delay:index*.3,             
                
            }}
            >

            </motion.div>
        ))}
    </motion.div>
  )
}
