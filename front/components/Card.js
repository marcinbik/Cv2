import Image from "next/image"

export default function Card({prop}){
   <div>
<Image
      src={prop}
      fill
      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
    />   </div> 
}