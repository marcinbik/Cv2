import { useState } from "react";
import Image from "next/image";


function NavLink({to, children})
{
    return <a href={to} className={`mx-2`}>
        {children}
    </a>}

function MobileNav({open, setOpen}) {
    
    
    return(
        <div className={`absolute  top-0 left-0 h-screen w-screen xl:w-screen bg-[#f1f1f1]  transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-tranform duration-200 	 else-in-out  filter drop-shadow-md`}>
            <div className={`flex items-center justify-center filter drop-shadow-md shadow-blue-200  bg-[#f1f1f1] h-30`}>
                <a className={`text-2xl  font-semibold `} href="/"><Image src='/logo.png' width={160} height={120} alt='logo' /></a>
            </div>
            <div className={`flex flex-col mx-20`}>
                <a className="text-2xl hover:border-solid p-2 text-center hover:border-2 font-medium my-4" href="/services" onClick={()=> setTimeout(()=> {setOpen(!open)},100)}>Moje Usługi</a>
                <a className="text-2xl p-2 text-center  hover:border-2 fonnt-medium my-4" href="/about" onClick={()=> setTimeout(()=> {setOpen(!open)},100)}>O Mnie</a>
                <a className="text-2xl p-2 text-center hover:border-2 fonnt-medium my-4" href="/contact" onClick={()=> setTimeout(()=> {setOpen(!open)},100)}>Kontakt</a>
                
            </div>
        </div>
      
        
    )

}

export default function Navbar(){
    const [open, setOpen] = useState(false)
   
    
    return (
        <nav className="flex filter z-50 drop-shadow-md shadow-blue-200 text-[#1D232E]    bg-[#F1F1F1] px-5 py-5 h-30 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
           
            <div className=" flex sticky w-8  flex-col justyfy-between  items-center md:hidden" onClick={() => {setOpen(!open)} }>
                <span className={`h-1 w-full mt-1 bg-[#1D232E] rounded-lg  transform transition duraton-300 ease-in-out ${open ? "rotate-45 -translate-y-3.5" :"" }`}/>
                <span className={` h-1 w-full mt-1 bg-[#1D232E] rounded-lg  transform transition duraton-300 ease-in-out ${open ? "rotate-45 -translate-y-3.5" :""}`}/>
                <span className={`h-1 w-full mt-1 bg-[#1D232E] rounded-lg transform transition duraton-300 ease-in-out ${open ? "rotate-45 -translate-y-3.5" :"" }`}/>
                <span className={`h-1 w-full mt-1 bg-[#1D232E] rounded-lg transform transition duraton-300 ease-in-out ${open ? "rotate-45 -translate-y-3.5" :"" }`}/>
            </div>

            <div className="hidden md:sticky filter grayscale  w-[100vw] h-fit text-2xl   md:flex ">
                <NavLink to="/">
                    <Image src='/logo.png' alt="logonav" width={100} height={90} />
                </NavLink>
                <NavLink to="/services">
                    <p className="hover:text-blue-200  hover:rounded mt-6  "> Moje Usługi</p>
                </NavLink>
                <NavLink to="/about">
                        <p className="hover:text-blue-200  hover:rounded mt-6 "> O Mnie</p>
                </NavLink>
                <NavLink to="/contact">
                        <p className="hover:text-blue-200  hover:rounded mt-6 "> Kontakt</p>
                </NavLink>
            </div>
        </nav>
        

    )

}