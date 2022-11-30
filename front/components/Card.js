import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Card({img}){
    return(
        <div className="p-5 rounded-lg">

        <div className=" container bg-[#DFDFDF] rounded-lg ">
            <div className="grid w-full h-[20vh]  object-contain overflow-hidden " >

            <img src='/wordpress.jpg' className=" rounded-lg  overflow-hidden"  />
            </div>
            <div>
            <h2 className="text-center p-5 text-2xl">Strona WordPress od 1499zł</h2>
            </div>
            <div className='p-5'>
             <p>
            <FontAwesomeIcon className='pr-2' icon={faRocket}/>
            Sześć miesięcy darmowego wsparcia
            </p>
            <p >
            <FontAwesomeIcon className='pr-2' icon={faRocket}/>
            Szybka realizacja
            </p>
            <p>
            <FontAwesomeIcon className='pr-2' icon={faRocket}/>
            Dopasowanie do potrzeb klienta 
            </p>
            </div>
            <Link href="/services" passHref >
            <button className="bg-[#569DA7] w-full h-[6vh] mt-10 rounded-lg  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 ">
                Sprawdź Ofertę
            </button>
    </Link>
            
        
        </div>
        </div>

    )
}