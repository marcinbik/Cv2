import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'

export default function Cto (){


return (
  <>
  <div className="flex justify-center">
    <Link href="#" passHref >
     <button class="bg-white container w-40  m-10	 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Sprawdź Ofertę
      </button>
    </Link>
  </div>
  <div className="flex-1 px-10 justify-center">
  <p>Dobierzemy odpowiednie rozwiązanie</p>
  <p>Od prostych stron po duże aplikacje </p>
  <p>Udzielamy darmowego wsparcia</p>
  </div>
  </>
)
}