import Navbar from "../components/Navbar"
import Contact from "../components/Contact"
import Title from "../components/Title"
import Card from "../components/Card"
import ListCto from "../components/ListCto"

export default function Services()
{
    const Cardhelper = ['Sześć miesięcy darmowego wsparcia','Szybka realizacja',
    'Dopasowanie do potrzeb klienta ']
         
        
    const Cardhelper2 = ['Sześć miesięcy darmowego wsparcia','Pomoc oraz szkolenia z obługi sklepu','PrestaShop/Woocomerce ']
        
    const Cardhelper3 = ['Najnowsze technologie programistyczne','Osobno przygotowany projekt UI','Aplikacja projektowana pod twój biznes i twoje potrzeby']
         
    return(
        <>
            <Navbar/>
            <Title title={"Dopasuj technologie do twoich potrzeb "}/>
            <Card img={'/wordpress.jpg'} title={"Strona WordPress od 1499zł" } text={Cardhelper} />
            <Card img={'/pay.jpg'} title= {"Sklep Internetowy od 2999zł"} text={Cardhelper2} />
            <Card img={'/code.jpg'} title= {"Autorska aplikacja od 6999zł "} text={Cardhelper3} />
            <ListCto/>
            <Contact/>
        </>

        
    )
}