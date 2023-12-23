
import { useRef } from "react";
import Card from "./Card"

function Foreground() {

  const ref=useRef(null);

  const data=[
    {
      desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat officiis aut dignissimos.",
      filesize:".9mb",
      close:true,
      tag:{
        isOpen: true,
        tagTitle:"Doenload now",
        tagColor:"green"
      },
    },

    {
      desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat officiis aut dignissimos.",
      filesize:".9mb",
      close:false,
      tag:{
        isOpen: true,
        tagTitle:"Doenload now",
        tagColor:"blue"
      },
    },

    {
      desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat officiis aut dignissimos.",
      filesize:".9mb",
      close:true,
      tag:{
        isOpen: false,
        tagTitle:"Doenload now",
        tagColor:"blue"
      },
    }
  ];
  return (
    <div ref={ref} className="w-full h-full fixed z-[3] flex gap-10 flex-wrap p-9">
        {data.map((item,index)=>(
          <Card key={index} data={item} refrence={ref}/>
        ))}
    </div>
  )
}

export default Foreground
