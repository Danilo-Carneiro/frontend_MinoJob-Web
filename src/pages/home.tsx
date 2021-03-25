import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../components/Sidebar'
import TopBar from '../components/TopBar'

export default function Home(){
    return(
        <div>
            <Head>
                <title>Dashboard | MinoJob</title>
            </Head>
            <TopBar page="Dashboard"/>
            <Sidebar />
            
            <div></div>
        </div>
    )
}