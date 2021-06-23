import Head from "next/head";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import styles from "../styles/pages/perfil.module.css";

export default function Vagas() {
  return (
    <div>
      <Head>
        <title>Meu perfil | MinoJob</title>
      </Head>

      {/*Passar para a prop page o nome que será exibido no topo da página */}
      <TopBar page="Meu Perfil" />

      {/* Passar como parâmetro para a Sidebar a página que deverá ser marcada como selecionada na sidebar "/" */}
      <Sidebar pagina="perfil" />

      <div className={styles.profileContainer}>

        <div className={styles.contentProfileContainer}>

          <div className={styles.infosPrincipal}>

            <div className={styles.cabecalho}>
              <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/65602748?s=200&v=4" alt="Logo"/>
              <h1 className={styles.name}>Coca Cola</h1>                
            </div>

            <p className={styles.descricao}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore laboriosam, autem fugiat tenetur iste nam, unde, totam provident mollitia delectus laborum sed molestiae. Quisquam accusamus ea impedit nihil. Maxime, provident! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore laboriosam, autem fugiat tenetur iste nam, unde, totam provident mollitia delectus laborum sed molestiae. Quisquam accusamus ea impedit nihil. Maxime, provident! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore laboriosam, autem fugiat tenetur iste nam, unde, totam provident mollitia delectus laborum sed molestiae. Quisquam accusamus ea impedit nihil. Maxime, provident!
            </p>
            
          </div>

          <div className={styles.infosContato}>
            <div className={styles.contentInfosContato}>
              <div className={styles.infoDeContato}>
                <h4>Telefone</h4>
                <p>00 0000-0000</p>                                                      
              </div>

              <div className={styles.infoDeContato}>
                <h4>Email de contato</h4>
                <p>emailcontato@empresa</p>                                                      
              </div>
            </div>
          </div>

          <div className={styles.info}>
            <h4>Endereço</h4>
            <p>Av Paulista 2215 São Paulo, SP</p> 
          </div>

          <div className={styles.info} id={styles.cnpj}>
            <h4>CNPJ</h4>
            <p>00.000.000/0000-00</p> 
          </div>

        </div>

      </div>
    </div>
  );
}
