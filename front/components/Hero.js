import Image from "next/image"





export default function Hero(){
    return(
        <>
            <p className="p-10 text-2xl">
                        Czytelna aplikacja
                        przyciągnie nowych
                        klientów
            </p>
       
        <div className= " m-5 w-[90vw] xl:w-[30vw] 2xl:w-[20vw]  h-80 rounded-lg  overflow-hidden bg-cover bg-center	bg-[url(/meet.jpg)] "/>
       
            <p className="p-10 text-2xl">
            Tworze
            z pasją proste strony
            internetowe 
            jak i zawasowane 
            aplikacje web 
             czy sklepy internetowe
            </p>
            
            <div className= " w-[90vw] h-80 rounded-lg m-5  xl:w-[30vw] 2xl:w-[20vw] overflow-hidden bg-cover bg-center	bg-[url(/code.jpg)] "/>
        </>
        
    )
}