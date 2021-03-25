import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import styles from '../styles/pages/detalhesVaga.module.css';

export default function DetalhesVaga(){
    return(
        <div>
            <Head>
                <title>Detalhes da Vaga | MinoJob</title>
            </Head>
            <TopBar page="Detalhes Vaga"/>
            
            <Sidebar />
            
            <div className={styles.vagasDetalhesContainer}>
                <div className={styles.contentDetalhesVagasContainer}>
                    
                    <form className={styles.containerForm} action="Criar Vaga">

                        <div className={styles.infosPrincipal}>
                            <div className={styles.info}>

                                <label className={styles.label} htmlFor="Nome">Nome</label>
                                <input className={styles.input} value="Programador full stack Junior" type="text" />

                            </div>

                            <div className={styles.info}>

                                <label className={styles.label} htmlFor="Area">Area de interesse</label>
                                <select name="Areas" id="">
                                    <option value="Marketing">TI</option>
                                    <option value="Marketing">Marketing</option>    
                                </select>

                            </div>

                            <div className={styles.info}>
                                <label className={styles.label} htmlFor="Nome">Detalhes</label>
                                <textarea className={styles.input} 
                                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus aliquet eleifend. Nullam rhoncus neque vitae erat fermentum, vel faucibus sem ornare. Sed justo enim, fermentum ut ante id, congue feugiat tellus. Aliquam hendrerit erat a maximus molestie. Integer in orci iaculis, lobortis nunc blandit, rhoncus lorem. Mauris malesuada enim at elit dapibus ultricies. In nec ante vel dolor placerat ornare id id tortor. Cras augue eros, convallis ac lacinia quis, mattis id ante. Donec bibendum magna a vehicula elementum. Etiam vitae lorem dignissim, rhoncus erat et, elementum tellus. In vitae velit rutrum, sodales massa sed, tempus dolor. Nunc venenatis arcu velit, a egestas mi fringilla vitae. Mauris nec dolor pellentesque, pharetra metus nec, semper purus. Curabitur nulla dui, tempor et libero at, porttitor fermentum est. Donec venenatis augue eu nisi hendrerit cursus. Nunc lectus risus, facilisis vel dolor et, accumsan viverra arcu." />
                            </div>
                        </div>

                        <fieldset className={styles.fieldset} id={styles.salarioContainer}>
                            <strong className={styles.title}>Salário</strong>

                            <div className={styles.contentSalarioContainer}>
                                <div className={styles.info} id={styles.info}>
                                    <label className={styles.label} htmlFor="Nome">De</label>
                                    <input id={styles.salarioInput} value="2700" className={styles.input} type="text" />
                                </div>

                                <div className={styles.info} id={styles.info}>
                                    <label className={styles.label} htmlFor="Nome">Até</label>
                                    <input id={styles.salarioInput} value="3200" className={styles.input} type="text" />
                                </div>
                            </div>
                        </fieldset>

                        <fieldset className={styles.fieldset}>
                            <strong className={styles.title}>Local de trablho</strong>

                            <div className={styles.info}>
                                <label className={styles.label} htmlFor="Nome">País</label>
                                <input className={styles.input} value="Brasil" type="text" />
                            </div>


                            <div className={styles.info}>
                                <label className={styles.label} htmlFor="Nome">Estado</label>
                                <input className={styles.input} value="SP" type="text" />
                            </div>

                            <div className={styles.info}>
                                <label className={styles.label} htmlFor="Nome">Cidade</label>
                                <input className={styles.input} value="São Paulo" type="text" />
                            </div>

                            <div className={styles.info}>
                                <label className={styles.label} htmlFor="Nome">Bairro</label>
                                <input className={styles.input} value="Barra Funda" type="text" />
                            </div>
                        </fieldset>

                        <div className={styles.boxBtns}>
                            <button className={styles.btn} type="button">Ver Candidatos</button>
                            <button className={styles.btn} id={styles.btnAlter} type="submit">Alterar Vaga</button>
                            <button className={styles.btn} id={styles.btnDelete} type="submit">Excluir Vaga</button>   
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}