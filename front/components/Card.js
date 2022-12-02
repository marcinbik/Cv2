import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { root } from 'postcss';



export default function Card({img,title ,  text }){
    
        
        const listItems = text.map((element) => 
                    <div className='p-3'>
                        <p>
                            <FontAwesomeIcon className='pr-2' icon={faRocket}/>
                            {element}
                        
                        </p>
                    </div>
        );
    

    return(
        <div className="p-5 rounded-lg">

        <div className=" container bg-[#DFDFDF] rounded-lg ">
            <div className="grid w-full h-[20vh]  object-contain overflow-hidden " >

                <img src={img} alt={title} className=" rounded-lg  overflow-hidden"  />
            </div>
            
            <div>
                <h2 className="text-center p-5 text-2xl">{title}</h2>
            </div>
            {listItems}
            <paragraf text={text}/>
            <Link href="/services" passHref >
                <button className="bg-[#569DA7] w-full h-[6vh] mt-10 rounded-lg  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 ">
                    Sprawdź Ofertę
                </button>
            </Link>
            
        
        </div>
        </div>

    )
}