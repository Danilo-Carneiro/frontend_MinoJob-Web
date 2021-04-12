import Link from 'next/link';
import styles from '../styles/components/Autenticacao.module.css'

export default function Autenticacao(props:any){
    let nomePagina = props.page;
    let login = null;
    function identificaPagina(nomePagina){
        if(nomePagina == "Acesse sua conta")
            return login = true;
        else
            return login = false;
    } 

    identificaPagina(nomePagina);
    console.log(login)
    

    return(
        <div className={styles.autenticacaoContainer}>
            <div className={styles.cardAutenticacaoContainer}>
                <h1  className={styles.title}> {nomePagina} </h1>
                {login == true ? 
                (
                    <>
                        <form className={styles.form}>
                            <div className={styles.info}>
                                <label htmlFor="email">
                                    <p>Digite seu email</p>
                                    <input placeholder="exemplo@email.com" type="text"/>
                                </label>
                            </div>
                            
                            <div className={styles.info}>
                                <label htmlFor="senha">
                                    <p>Digite sua senha</p>
                                    <input placeholder="**********" type="text"/>
                                </label>
                            </div>

                            <button className={styles.btnLogin} type="submit">Login</button>
                        </form>

                        <div className={styles.divisor}>
                            <div/>
                            <div className={styles.textoDivisor}>
                                <p>Não possui conta?</p>
                            </div>
                            <div/>
                        </div>
                        
                        <Link href="/cadastro">
                            <button className={styles.criarContaBtn}>
                                Crie sua conta
                            </button>
                        </Link>
                    </>
                ) : (
                    <>
                        <form className={styles.form}>
                            <div className={styles.info}>
                                <label htmlFor="email">
                                    <p>Digite seu email</p>
                                    <input id="email" placeholder="exemplo@email.com" type="text"/>
                                </label>
                            </div>
                            
                            <div className={styles.info}>
                                <label htmlFor="senha">
                                    <p>Digite sua senha</p>
                                    <input id="senha" placeholder="**********" type="text"/>
                                </label>
                            </div>

                            <button className={styles.btnLogin} type="submit">Login</button>
                        </form>

                        <div className={styles.divisor}>
                            <div/>
                            <div className={styles.textoDivisor}>
                                <p>Já possui conta?</p>
                            </div>
                            <div/>
                        </div>
                        
                        <Link href="/cadastro">
                            <button className={styles.criarContaBtn}>
                                Acesse sua conta
                            </button>
                        </Link>

                        
                    </>
                )}
                
            </div>
        </div>
    )
}