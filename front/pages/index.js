import Head from '../components/Head'
import Title from '../components/Title'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Cto from '../components/Cto' 
import styles from '../styles/Home.module.css'
import { fromJSON } from 'postcss'


export default function Home() {
  return (
    <main>

    <div className='flex-grid  '>
    <Head/>
    <Navbar/>
    <Title/>
    <Hero />
    <Cto/>
    
    
   
    </div>
    </main>
  )
}
