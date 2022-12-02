import Navbar from "../components/Navbar"
import Contact from "../components/Contact"
import Title from "../components/Title"
import Card from "../components/Card"
import ListCto from "../components/ListCto"

export default function Services()
{
    const Cardhelper = []
         Cardhelper.push('Sześć miesięcy darmowego wsparcia')
         Cardhelper.push('Szybka realizacja')
         Cardhelper.push('Dopasowanie do potrzeb klienta ')

    const Cardhelper2 = []
         Cardhelper2.push('Sześć miesięcy darmowego wsparcia')
         Cardhelper2.push('Pomoc oraz szkolenia z obługi sklepu')
         Cardhelper2.push('Dopasowanie do potrzeb klienta ')
         Cardhelper2.push('PrestaShop/Woocomerce ')

    const Cardhelper3 = []
         Cardhelper3.push('Najnowsze technologie programistyczne')
         Cardhelper3.push('Osobno przygotowany projekt UI')
         Cardhelper3.push('Aplikacja projektowana pod twój biznes i twoje potrzeby')
    
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