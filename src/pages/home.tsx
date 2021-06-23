import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../components/Sidebar'
import TopBar from '../components/TopBar'
import styles from '../styles/pages/home.module.css'
import ItemCandidato from '../components/ItemCandidato'

export default function Home(){
    return(
        <div>
            <Head>
                <title>Dashboard | MinoJob</title>
            </Head>
            <TopBar page="Dashboard"/>
            {/* Passar como parâmetro para a Sidebar a página que deverá ser marcada como selecionada na sidebar "/" */}
            <Sidebar pagina="home" />

            <div className={styles.dashboardContainer}>
                <div className={styles.contentDashboardContainer}>

                    <div className={styles.columnLeft}>
                        <div className={styles.boxAzul} >
                            <div className={styles.textBoxAzul}>
                                <h2>Olá 'nome empresa'</h2>
                                <p>Você tem um total de x candidatos em suas x vagas publicadas</p> 
                            </div>

                            <img src="./assets/whellchair.svg" className={styles.whellchairSvg} alt="" />
                            
                        </div>

                        <div className={styles.areaCandidatos}>
                            <h2>
                                Últimos candidatos
                            </h2>
            
                            <div className={styles.cabecalhoTabela}>
                                <h4>Nome Completo</h4>
                                <h4>Vaga</h4>
                            </div>

                            {/* Não coloca uma lista muito grande de candidatos, no meu monitor 3 ficou bom.
                             eu não queria q essa página tivesse scroll*/}
                            <ItemCandidato/>
                            <ItemCandidato/>
                            <ItemCandidato/>


                        </div>
                    </div>

                    

                    <div className={styles.columnRigth}>
                        <div className={styles.vagasPublicadas}>
                            <Link href="/vagas">
                                <a href="">
                                    <h2>10</h2><br />
                                    <h3>Vagas publicadas</h3>
                                </a>
                            </Link>
                        </div>

                        <div className={styles.maisCandidatos}>
                             <h2>Vaga campeã!</h2>
                             <img className={styles.trofeu} src="./assets/trofeu.png" alt="" />
                             <h3>Nome da vaga</h3>
                             <p>Essa é a vaga mais concorrida da sua empresa!</p>
                        </div>
                    </div>

                </div>
            </div>
            
            <div></div>
        </div>
    )
}