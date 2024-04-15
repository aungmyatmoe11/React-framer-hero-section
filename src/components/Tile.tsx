import { motion } from "framer-motion"

const Tile = () => {
  return (
    <motion.div
      whileHover={{
        zIndex: 1,
        backgroundColor: "#67e8f9",
      }}
      transition={{
        duration: 3,
        ease: "easeOut",
      }}
      className="aspect-square bg-slate-900 border-slate-300"
    />
  )
}
export default Tile
