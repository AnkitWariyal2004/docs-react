import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data, refrence}) {
  return (
    
      <motion.div drag dragConstraints={refrence} whileDrag={{scale :1.2}} className=" relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden">
        <FaRegFileAlt/>
        <p className="text-sm mt-5 leading-tight font-semibold">{data.desc}</p>
        <div className="footer absolute bottom-0 w-full left-0 ">
            <div className="flex items-center justify-between px-8  py-3  mb-3 ">
                <h5>{data.filesize}</h5>
                <span className="w-7 h-7 bg-zinc-600 rounded-full flex justify-center items-center">
                  {data.close ? <IoClose/> :<FaDownload size=".7em" color="#fff"/>}
                </span>
            </div>
            {
              data.tag.isOpen &&  <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
              <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div> 
            }
           
        </div>
      </motion.div>
    
  )
}

 

export default Card
