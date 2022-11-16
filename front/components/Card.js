import Image from "next/image"





export default function Card({ image}){
    return(
        

        
            <div className= "fit w-[100vw] h-80 object-contain relative ">
            <Image  src={image} className=""  fill alt="card01" />
            </div>
        
    )
}