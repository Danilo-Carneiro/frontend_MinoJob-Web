import Link from 'next/link';
import styles from '../styles/components/Autenticacao.module.css'
import api from '../services/api';

export default function Autenticacao(props:any){
    let nomePagina = props.page;
    let login = null;
    
    
    // function submit() {
    //     api.post('/usuario', {
    //         "email": email,
    //         "senha": pass,
    //         "perfil": 'USUARIO'
    //     })
    //     .then(function (response) {
    //         alert('CONTA CRIADA COM SUCESSO!')
    //     })
    //     .catch (function (error) {
    //         console.error(error)
    //     })
    // }

    function identificaPagina(nomePagina){
        if(nomePagina == "Acesse sua conta")
            return login = true;
        else
            return login = false;
    } 

    identificaPagina(nomePagina);

    let sessaoCadastro = 1
    function mudaSessão(){
        return sessaoCadastro + 1
    }

    return(
        <div className={styles.autenticacaoContainer}>
            <div className={styles.cardAutenticacaoContainer}>
                <h1  className={styles.title}> {nomePagina} </h1>

                {/* ******************INICIO DO FORM DE LOGIN****************** */}
                {/* Caso o login esteja true carregará o formulário de login */}
                {login == true ? 
                (
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
                                    <input id="pass" placeholder="**********" type="text"/>
                                </label>
                            </div>

                            <button  className={styles.btnLogin} type="submit">Login</button>
                        </form>

                        <div className={styles.divisor}>
                            <div/>
                            <div className={styles.textoDivisor}>
                                <p>Não possui conta?</p>
                            </div>
                            <div/>
                        </div>
                        
                        <Link href="/cadastro">
                            <button className={styles.mudarTipoDeAutenticacaoBtn}>
                                Crie sua conta
                            </button>
                        </Link>
                        {/* ******************FIM DO FORM DE LOGIN****************** */}
                    </>
                    
                ) : (
                    <>
                {/* ******************INICIO DO FORM DE CADASTRO****************** */}
                    {/* Caso o login esteja false carregará o formulário de cadastro */}
                        <form className={styles.form}>
                            {
                            (sessaoCadastro == 1 ? (
                                <>
                                    <p className={styles.nomeSessao}>Informações de Acesso</p>

                                    <div className={styles.info}>
                                        <label htmlFor="email">
                                            <p>Digite seu email de Acesso</p>
                                            <input id="email" placeholder="exemplo@email.com" type="text"/>
                                        </label>
                                    </div>
                                    
                                    <div className={styles.info}>
                                        <label htmlFor="senha">
                                            <p>Digite sua senha de Acesso</p>
                                            <input id="senha" placeholder="**********" type="text"/>
                                        </label>
                                    </div>    
                                </>                                                                                            
                            ):(
                                <>
                                    <p className={styles.nomeSessao}>Informações da empresa</p>

                                    <div className={styles.info}>
                                        <label htmlFor="email">
                                            <p>Digite seu email de Acesso</p>
                                            <input id="email" placeholder="exemplo@email.com" type="text"/>
                                        </label>
                                    </div>
                                    
                                    <div className={styles.info}>
                                        <label htmlFor="senha">
                                            <p>Digite sua senha de Acesso</p>
                                            <input id="senha" placeholder="**********" type="password"/>
                                        </label>
                                    </div>    
                                    {/* ******************FIM DO FORM DE CADASTRO****************** */}

                                </>    
                            )
                            )
                            }


                            

                        </form>

                        <button className={styles.btnLogin} onClick={mudaSessão}>Avançar</button>

                        <div className={styles.divisor}>
                            <div/>
                            <div className={styles.textoDivisor}>
                                <p>Já possui conta?</p>
                            </div>
                            <div/>
                        </div>
                        
                        <Link href="/login">
                            <button className={styles.mudarTipoDeAutenticacaoBtn}>
                                Acesse sua conta
                            </button>
                        </Link>

                        
                    </>
                )}
                
            </div>
        </div>
    )
}