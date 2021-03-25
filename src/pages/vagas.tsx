import Head from "next/head"
import Link from "next/link"
import ItemVaga from "../components/itemVaga"
import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import styles from '../styles/pages/vagas.module.css'

export default function Vagas(){
    return(
        <div>
            <Head>
                <title>Vagas | MinoJob</title>
            </Head>
            <TopBar page="Vagas"/>
            
            <Sidebar />
            
            <div className={styles.vagasContainer}>
                <div className={styles.contentVagasContainer}>

                    <div className={styles.top}>
                        <h3>Total de vagas: 4</h3>

                        <div className={styles.filters}>
                            <button>
                                <img className={styles.icon} src="assets/filter.png" alt=""/>
                            </button>

                            <select name="ordenar" className={styles.selectOrder}>
                                <option value="">Ordenar por</option>
                                <option value="">Mais candidatos</option>
                                <option value="">Menos candidatos</option>
                                <option value="">Ordem alfabética</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.content}>
                        {/* <Link href="/detalhesvaga">
                            <a>
                                <ItemVaga/>
                            </a>
                        </Link> */}

                        <ItemVaga/>
                        <ItemVaga/>
                        <ItemVaga/>
                        <ItemVaga/>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}