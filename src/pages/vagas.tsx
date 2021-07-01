import Head from "next/head"
import Link from "next/link"
import { useEffect, useState } from "react"
import ItemVaga from "../components/ItemVaga"
import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import api from "../services/api"
import styles from '../styles/pages/vagas.module.css'
import { Vaga } from "../components/ItemVaga"

export default function Vagas() {

    const [vaga, setVaga] = useState([])

    const token = localStorage.getItem("@TOKEN")
    const id = localStorage.getItem("@ID")

    useEffect(() => {
        //Capturando o token e o ID do usuario logado
        let token = localStorage.getItem("@TOKEN")
        let id_user = localStorage.getItem("@ID")
        
        api.get("/vaga", {
            headers: { 'Authorization': token }
        })
            .then(response => {
                setVaga(response.data)
            })
            .catch(err => console.error(err))
    })

    

    const tamanho = vaga.length

    return (
        <div>
            <Head>
                <title>Vagas | MinoJob</title>
            </Head>
            <TopBar page="Vagas" />

            {/* Passar como parâmetro para a Sidebar a página que deverá ser marcada como selecionada na sidebar "/" */}
            <Sidebar pagina="vagas" />

            <div className={styles.vagasContainer}>
                <div className={styles.contentVagasContainer}>

                    <div className={styles.top}>
                        <h3>{`Total de vagas: ${tamanho}`}</h3>

                        <div className={styles.filters}>
                            <button>
                                <img className={styles.icon} src="assets/filter.png" alt="" />
                            </button>

                            <select name="ordenar" className={styles.selectOrder}>
                                <option value="">Ordenar por</option>
                                <option value="">Mais candidatos</option>
                                <option value="">Menos candidatos</option>
                                <option value="">Ordem alfabética</option>
                            </select>
                        </div>
                    </div>

                    {
                        vaga.map((i: Vaga) => {
                            
                            return <ItemVaga key={i.id} vaga={i} />
                        })

                        // vaga.filter((i => i.id == id) => {
                        //     return <ItemVaga key={i.id} vaga={i} />
                        // })
                            
                        
                    }


                    {/* <div className={styles.content}>
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
                        
                    </div> */}
                </div>
            </div>
        </div>
    )
}