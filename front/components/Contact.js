import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
export default function Contact() {
    return(
        <div className='grid h-fit '>
        <div className='xl:flex h-fit  font-bold pt-[5vh] xl:pt-[7vh] xl:mx-6 text-xl xl:text-5xl text-[#1D232E]  p-5   mx-0 '>
       
                <div className='   mb-2 xl:m-4 p-1 hover:text-[#b12c2c]    '> <FontAwesomeIcon icon={faPhone} /><a href='tel:887407337'> telefon: 887407337</a></div>
                <div className='  mb-2 xl:m-4 p-1 hover:text-[#b12c2c]     pb-0px-2 '><FontAwesomeIcon icon={faEnvelope} /><a href='mailto:marcinbikiewicz@gmail.com'> email: marcinbikiewicz@gmail</a> </div>
        
            </div>
            </div>
    )

}