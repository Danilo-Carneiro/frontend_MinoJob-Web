import Head from "next/head"
import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import styles from '../styles/pages/perfil.module.css'

export default function Vagas(){
    return(
        <div>
            <Head>
                <title>Meu perfil | MinoJob</title>
            </Head>
            <TopBar page="Meu Perfil"/>
            
            {/* Passar como parâmetro para a Sidebar a página que deverá ser marcada como selecionada na sidebar "/" */}
            <Sidebar pagina="perfil"/>
            
            <div className={styles.vagasContainer}>
                <div className={styles.contentVagasContainer}>
                    
                </div>
            </div>
        </div>
    )
}