import Head from "next/head"
import Link from "next/link"
import ItemVaga from "../components/ItemVaga"
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
            
            {/* Passar como parâmetro para a Sidebar a página que deverá ser marcada como selecionada na sidebar "/" */}
            <Sidebar pagina="vagas"/>
            
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
                        <Link href="/detalhesvaga">
                            <a className={styles.itemVaga}>
                                <ItemVaga/>
                            </a>
                        </Link>

                        <Link href="/detalhesvaga">
                            <a className={styles.itemVaga}>
                                <ItemVaga/>
                            </a>
                        </Link>
                        <Link href="/detalhesvaga">
                            <a className={styles.itemVaga}>
                                <ItemVaga/>
                            </a>
                        </Link>
                        <Link href="/detalhesvaga">
                            <a className={styles.itemVaga}>
                                <ItemVaga/>
                            </a>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}