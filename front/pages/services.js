import Navbar from "../components/Navbar"
import Contact from "../components/Contact"
import Title from "../components/Title"
import Card from "../components/Card"
import { faChampagneGlasses } from "@fortawesome/free-solid-svg-icons"


export default function Services()
{
    const helper = []
         helper.push('Sześć miesięcy darmowego wsparcia')
         helper.push('Szybka realizacja')
         helper.push('Dopasowanie do potrzeb klienta ')
    console.log(helper)
    return(
        <>
        <Navbar/>
        <Title title={"Dopasuj technologie do twoich potrzeb "}/>
        <Card img={'/wordpress.jpg'} title={"Nowoczesne Aplikacje" } text={helper} />



        <Contact/>
        </>

        
    )
}