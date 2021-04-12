import Head from 'next/head'
import TopBar from '../components/TopBar'
import Sidebar from '../components/Sidebar'
import styles from '../styles/pages/novavaga.module.css'

export default function NovaVaga(){
    return(
        <div>
            <Head>
                <title>Meu perfil | MinoJob</title>
            </Head>
            <TopBar page="Nova vaga"/>
            
            {/* Passar como parâmetro para a Sidebar a página que deverá ser marcada como selecionada na sidebar "/" */}
            <Sidebar pagina="novavaga" />
            
            <div className={styles.novaVagaContainer}>
                <div className={styles.contentNovaVagaContainer}>

                    <form className={styles.containerForm}action="Criar Vaga">

                        <div className={styles.infosPrincipal}>
                            <div className={styles.info}>

                                <label className={styles.label} htmlFor="Nome">Nome</label>
                                <input className={styles.input} type="text"/>

                            </div>

                            <div className={styles.info}>

                                <label className={styles.label} htmlFor="Area">Area de interesse</label>
                                <select name="Areas" id="">
                                    <option value="Marketing">Marketing</option>
                                    <option value="Marketing">TI</option>
                                </select>

                            </div>

                            <div className={styles.info}>
                                <label className={styles.label} htmlFor="Nome">Detalhes</label>
                                <textarea className={styles.input}/>    
                            </div>
                        </div>

                        <fieldset className={styles.fieldset} id={styles.salarioContainer}>
                            <strong className={styles.title}>Salário</strong>

                            <div className={styles.contentSalarioContainer}>
                                <div className={styles.info} id={styles.info}>
                                    <label className={styles.label} htmlFor="Nome">De</label>
                                    <input id={styles.salarioInput} className={styles.input} type="text"/>
                                </div>

                                <div className={styles.info} id={styles.info}>
                                    <label className={styles.label}  htmlFor="Nome">Até</label>
                                    <input id={styles.salarioInput} className={styles.input} type="text"/>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset className={styles.fieldset}>
                            <strong className={styles.title}>Local de trablho</strong>

                            <div className={styles.info}>
                                <label className={styles.label} htmlFor="Nome">País</label>
                                <input className={styles.input} type="text"/>
                            </div>
                            

                            <div className={styles.info}>
                                <label className={styles.label} htmlFor="Nome">Estado</label>
                                <input className={styles.input} type="text"/>
                            </div>

                            <div className={styles.info}>
                                <label className={styles.label} htmlFor="Nome">Cidade</label>
                                <input className={styles.input} type="text"/>
                            </div>

                            <div className={styles.info}>
                                <label className={styles.label} htmlFor="Nome">Bairro</label>
                                <input className={styles.input}type="text"/>
                            </div>
                        </fieldset>

                        <button type="submit">
                            Criar Vaga
                        </button>

                    </form>

                </div>
            </div>
        </div>
    )
}