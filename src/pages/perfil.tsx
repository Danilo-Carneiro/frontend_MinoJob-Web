import Head from "next/head";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react"
import TopBar from "../components/TopBar";
import styles from "../styles/pages/perfil.module.css";
import api from "../services/api";


export default function Perfil() {
  const [user, setUser] = useState({
    nome: '',
    descricao: '',
    telefone: '',
    email: '',
    endereco: '',
    cnpj: '',
  })

    useEffect(() => {
        //Capturando o token e o ID do usuario logado
        let token = localStorage.getItem("@TOKEN")
        let id_user = localStorage.getItem("@ID")
        

        api.get(`/usuario/id/${id_user}`, {
            headers: { 'Authorization': token }
        })
          .then(response => {
            setUser(response.data)
          })
          .catch(err => console.error(err))
    }) 


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
              <h1 className={styles.name}>{user.nome}</h1>                
            </div>

            <p className={styles.descricao}>
              {user.descricao}
            </p>
            
          </div>

          <div className={styles.infosContato}>
            <div className={styles.contentInfosContato}>
              <div className={styles.infoDeContato}>
                <h4>Telefone</h4>
                <p>{user.telefone}</p>                                                      
              </div>

              <div className={styles.infoDeContato}>
                <h4>Email de contato</h4>
                <p>{user.email}</p>                                                      
              </div>
            </div>
          </div>

          <div className={styles.info}>
            <h4>Endereço</h4>
            <p>{user.endereco}</p> 
          </div>

          <div className={styles.info} id={styles.cnpj}>
            <h4>CNPJ</h4>
            <p>{user.cnpj}</p> 
          </div>

        </div>

      </div>
    </div>
  );
}
