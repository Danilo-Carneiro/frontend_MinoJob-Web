import Link from 'next/link';
import styles from '../styles/components/Autenticacao.module.css'
import api from '../services/api';
import { useEffect, useState } from 'react';

export default function Autenticacao(props: any) {
    let nomePagina = props.page;
    let login = null;

    useEffect(() => {

    })
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)

        submit(data.email, data.pass)
    }


    function submit(email, pass) {
        api.post('/login', {
            "username": email,
            "password": pass,
        })
            .then(function (response) {
                //Setando o token e o id no localStorage
                localStorage.setItem("@TOKEN", response.data.token)
                localStorage.setItem("@ID", response.data.id)
            })
            .catch(function (error) {
                console.error(error)
            })
    }

    // function submitCadastro(email, senha, nmEmpresa) {
    //     api.post('/usuario', {
    //         "email": email,
    //         "senha": senha,
    //         "nmEmpresa": nmEmpresa
    //     })
    //         .then(function (response) {
    //             //Setando o token e o id no localStorage
    //             localStorage.setItem("@TOKEN", response.data.token)
    //             localStorage.setItem("@ID", response.data.id)
    //         })
    //         .catch(function (error) {
    //             console.error(error)
    //         })
    // }





    function identificaPagina(nomePagina) {
        if (nomePagina == "Acesse sua conta")
            return login = true;
        else
            return login = false;
    }

    identificaPagina(nomePagina);

    return (
        <div className={styles.autenticacaoContainer}>
            <div className={styles.cardAutenticacaoContainer}>
                <h1 className={styles.title}> {nomePagina} </h1>

                {/* ******************INICIO DO FORM DE LOGIN****************** */}
                {/* Caso o login esteja true carregará o formulário de login */}
                {login == true ?
                    (
                        <>
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.info}>
                                    <label htmlFor="email">
                                        <p>Digite seu email</p>
                                        <input name="email" placeholder="exemplo@email.com" type="text" />
                                    </label>
                                </div>

                                <div className={styles.info}>
                                    <label htmlFor="senha">
                                        <p>Digite sua senha</p>
                                        <input name="pass" placeholder="**********" type="Password" />
                                    </label>
                                </div>

                                <button className={styles.btnLogin} type="submit">Login</button>
                            </form>

                            <div className={styles.divisor}>
                                <div />
                                <div className={styles.textoDivisor}>
                                    <p>Não possui conta?</p>
                                </div>
                                <div />
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
                                    
                                    <>
                                        <p className={styles.nomeSessao}>Informações de Acesso</p>

                                        <div className={styles.info}>
                                            <label htmlFor="email">
                                                <p>Digite seu email de Acesso</p>
                                                <input name="email" id="email" placeholder="exemplo@email.com" type="text" />
                                            </label>
                                        </div>

                                        <div className={styles.info}>
                                            <label htmlFor="senha">
                                                <p>Digite sua senha de Acesso</p>
                                                <input name="senha" id="senha" placeholder="**********" type="text" />
                                            </label>
                                        </div>

                                        <div className={styles.info}>
                                            <label htmlFor="nmEmpresa">
                                                <p>Nome da empresa</p>
                                                <input name="nmEmpresa" id="senha" placeholder="**********" type="text" />
                                            </label>
                                        </div>

                                        <div className={styles.info}>
                                            <label htmlFor="dsEmpresa">
                                                <p>Descrição</p>
                                                <input name="dsEmpresa" id="senha" placeholder="**********" type="text" />
                                            </label>
                                        </div>

                                        <div className={styles.info}>
                                            <label htmlFor="telContato">
                                                <p>Telefone de Contato</p>
                                                <input name="telContato" id="senha" placeholder="**********" type="text" />
                                            </label>
                                        </div>

                                        <div className={styles.info}>
                                            <label htmlFor="emailContato">
                                                <p>Email de Contato</p>
                                                <input name="emailContato" id="senha" placeholder="**********" type="text" />
                                            </label>
                                        </div>

                                        <div className={styles.info}>
                                            <label htmlFor="endEmpresa">
                                                <p>Endereço</p>
                                                <input name="endEmpresa" id="senha" placeholder="**********" type="text" />
                                            </label>
                                        </div>

                                        <div className={styles.info}>
                                            <label htmlFor="cnpj">
                                                <p>CNPJ</p>
                                                <input name="cnpj" id="senha" placeholder="**********" type="text" />
                                            </label>
                                        </div>

                                        
                                    
                                
                                        {/* ******************FIM DO FORM DE CADASTRO****************** */}

                                    </>
                                }




                            </form>


                            <div className={styles.divisor}>
                                <div />
                                <div className={styles.textoDivisor}>
                                    <p>Já possui conta?</p>
                                </div>
                                <div />
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