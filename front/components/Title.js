import Image from "next/image"

export default function Title({title}){
    return(
        <div >
            
            <h1 className="text-[#1D232E] tracking-wide leading-10 my-10 text-4xl p-6">{title}</h1>
        </div>
        
    )
}