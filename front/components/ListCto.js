import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight} from '@fortawesome/free-solid-svg-icons'

export default function ListCto()
{ 

    return(

            <div className="flex-1 px-10  py-10 text-md justify-center">
                <p className='py-2'>
                    <FontAwesomeIcon icon={faHandPointRight} className="pr-2 text-xl" />
                    Dobierzemy odpowiednie rozwiązanie</p>
                
                <p className='py-2'><FontAwesomeIcon icon={faHandPointRight} className="pr-2 text-xl" />
                    Od prostych stron po duże aplikacje </p>
                <p className='py-2'><FontAwesomeIcon icon={faHandPointRight} className="pr-2 text-xl" />
                    Udzielamy darmowego wsparcia
                </p>
            </div>
    )



}