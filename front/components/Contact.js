import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
export default function Contact() {
    return(
        <div className=' h-fit grid place-items-center	'>
            <Image className='mt-8' src='/logo.png' alt='logo' width={320} height={240} />

        <div className='xl:flex h-fit ml-6   mb-10 font-bold pt-[5vh] xl:pt-[7vh] xl:mx-6 text-xl xl:text-5xl text-[#1D232E]  pr-4    '>
       
                <div className='mb-2 xl:m-4 p-1 hover:text-[#b12c2c]'> <FontAwesomeIcon icon={faPhone} />
                    <a href='tel:887407337'> telefon: 887407337</a>
                </div>
                <div className='mb-2 xl:m-4 p-1 hover:text-[#b12c2c] pb-0 px-2'><FontAwesomeIcon icon={faEnvelope} />
                    <a href='mailto:marcinbikiewicz@gmail.com'> email: marcinbikiewicz@gmail</a> 
                </div>
        
            </div>
            </div>
    )

}