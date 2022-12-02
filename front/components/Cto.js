import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBomb} from '@fortawesome/free-solid-svg-icons'

export default function Cto (){


return (
  <>
  <div className="flex justify-center ">
    <Link href="/services" passHref >
     <button className="bg-white container w-40 xl:w-[20vw]  m-10 drop-shadow-2xl	
      hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border
       border-gray-400 rounded shadow">
        Sprawdź Ofertę
      </button>
    </Link>
  </div>
  <div className="flex-1 px-10 xl:text-3xl justify-center">
       <p>
          <FontAwesomeIcon icon={faBomb} className="pr-2" />
          Dobierzemy odpowiednie rozwiązanie
       </p>
    
    <p>
        <FontAwesomeIcon icon={faBomb} className="pr-2" />
        Od prostych stron po duże aplikacje 
    </p>
    <p>
        <FontAwesomeIcon icon={faBomb} className="pr-2" />
        Udzielamy darmowego wsparcia
    </p>
  </div>
  </>
)
}