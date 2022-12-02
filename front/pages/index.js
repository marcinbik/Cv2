import Head from '../components/Head'
import Title from '../components/Title'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Cto from '../components/Cto' 
import Contact from '../components/Contact'
import styles from '../styles/Home.module.css'
import { fromJSON } from 'postcss'


export default function Home() {
  return (
    <main>

      <div className='grid xl:place-items-center '>
        <Head/>
        <Navbar/>
        <Title title={"Nowoczesne Aplikacje Dla twojej Firmy"}/>
        <Hero />
        <Cto/>
        <Contact/>
      </div>
    </main>
  )
}
