import Head from '../components/Head'
import Title from '../components/Title'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
    <Head/>
    <Navbar/>
    <Title/>
    <div className=' '>
    <Card image='/meet.jpg'/>
    
    </div>
    </>
  )
}
