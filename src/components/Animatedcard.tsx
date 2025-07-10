import {motion} from 'framer-motion'

export const Animatedcard = () => {

    {console.log("helllo")}
  return (
    <motion.div 
    initial={{scale:1,
        rotate:0,
    }}
    whileHover={{
        scale:1.05, rotate:3,
    }}
    whileTap={{scale:0.95}}
    className="max-w-sm mx-auto  bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer">
        <img className="w-full h-48 object-cover" src="https://picsum.photos/400/300" alt="image" />
        <div>
            <h2 className="text-xl font-semibold mb-2">card title</h2>
            <p>this is a simlpe card with frmaer motion using tailwind css and react and typescript</p>
            <button className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-300 transition">Learn more</button>
        </div>
        
    </motion.div>
  )
}
