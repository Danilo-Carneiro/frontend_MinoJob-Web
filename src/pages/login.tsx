import Head from 'next/head'
import Autenticacao from '../components/Autenticacao'

export default function Login(){
    return(
        <>
            <Head>
                <title>Login | MinoJob</title>
            </Head>
            <div>
                <Autenticacao page="Acesse sua conta"/>
            </div>
        </>
    )
}