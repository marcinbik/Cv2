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

    <div className='flex-1 xl:grid  '>
      <Head/>
    <Navbar/>
      <div className='2xl:w-[60vw] xl:pl-[80em]'>
    <Title title={"Nowoczesne Aplikacje Dla twojej Firmy"}/>
    <Hero />
    <Cto/>
    <Contact/>
      </div>
    
    
    
   
    </div>
    </main>
  )
}
