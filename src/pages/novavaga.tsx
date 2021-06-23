import Head from 'next/head'
import TopBar from '../components/TopBar'
import Sidebar from '../components/Sidebar'
import styles from '../styles/pages/novavaga.module.css'

export default function NovaVaga(){
    return(
        <div>
            <Head>
                <title>Nova Vaga | MinoJob</title>
            </Head>

            {/*Passar para a prop page o nome que será exibido no topo da página */}
            <TopBar page="Nova Vaga" />

            {/* Passar como parâmetro para a Sidebar a página que deverá ser marcada como selecionada na sidebar "/" */}
            <Sidebar pagina="novavaga" />

            <div className={styles.novaVagaContainer}>
                <div className={styles.contentNovaVagaContainer}>
                        <form action="criarVaga" className={styles.divForm}>
                            <div className={styles.divInputs}>
                                <div className={styles.infos}>
                                    <label htmlFor="nome">Nome</label>
                                    <input  name="nome" id={styles.nome} type="text" maxLength={60} />
                                    
                                    <label htmlFor="interesse">Area de interesse</label>
                                    <input type="text" />

                                    <label htmlFor="descricao">Descrição</label>
                                    <textarea/>

                                    <label htmlFor="salario">Faixa salarial</label>
                                    <input type="text" />
                                </div>

                                <div className={styles.infos}>
                                    <h4>Endereço da Vaga</h4>
                                    <label htmlFor="pais">País</label>
                                    <input type="text" />

                                    <label htmlFor="estado">Estado</label>
                                    <select className={styles.uf}>
                                        <option value="None">UF</option>
                                        <option value="AC">AC</option>
                                        <option value="AL">AL</option>
                                        <option value="AP">AP</option>
                                        <option value="AM">AM</option>
                                        <option value="BA">BA</option>
                                        <option value="CE">CE</option>
                                        <option value="DF">DF</option>
                                        <option value="ES">ES</option>
                                        <option value="GO">GO</option>
                                        <option value="MA">MA</option>
                                        <option value="MT">MT</option>
                                        <option value="MS">MS</option>
                                        <option value="MG">MG</option>
                                        <option value="PA">PA</option>
                                        <option value="PB">PB</option>
                                        <option value="PR">PR</option>
                                        <option value="PE">PE</option>
                                        <option value="PI">PI</option>
                                        <option value="RJ">RJ</option>
                                        <option value="RN">RN</option>
                                        <option value="RS">RS</option>
                                        <option value="RO">RO</option>
                                        <option value="RR">RR</option>
                                        <option value="SC">SC</option>
                                        <option value="SP">SP</option>
                                        <option value="SE">SE</option>
                                        <option value="TO">TO</option>

                                    </select>

                                    <label htmlFor="nome">Cidade</label>
                                    <input type="text" />

                                    <label htmlFor="nome">Bairro</label>
                                    <input type="text" />
                                </div>
                            </div>
                            
                            <div className={styles.divBtns}>
                                <button className={styles.resetBtn} type="reset">Limpar</button>
                                <button className={styles.submitBtn} type="reset">Criar Vaga</button>
                            </div>

                        </form>
                </div>
            </div>
        </div>
    )
}