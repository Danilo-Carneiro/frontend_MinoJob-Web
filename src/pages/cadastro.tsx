import Head from 'next/head'
import Link from 'next/link'
import Autenticacao from '../components/Autenticacao'

export default function Cadastro(){
    return(
        <>
            <Head>
                <title> Cadastro | MinoJob </title>
            </Head>
            <div>
                <Autenticacao page="Crie sua conta"/>
            </div>
        </>
    )
}