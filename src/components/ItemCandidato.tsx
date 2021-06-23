import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../components/Sidebar'
import TopBar from '../components/TopBar'
import styles from '../styles/components/itemCandidato.module.css'

export default function ItemCandidato(){
    return(
        <div className={styles.itemCandidato}>
            <div className={styles.infosUsuario}>
                <img src='./assets/profile.png' className={styles.avatar}/>
                <p>Nome Candidato</p>
            </div>

            <div className={styles.vaga}>
                Vaga que ele está candidatado
            </div>
            
        </div>
    )
}