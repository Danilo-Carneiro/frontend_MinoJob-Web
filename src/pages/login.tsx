import Head from 'next/head'
import Autenticacao from '../components/Autenticacao'

export default function Login(){
    return(
        <>
            <Head>
                <title>Login | MinoJob</title>
            </Head>
            <div>
                {/* Para o container autenticação tem q passar o título que será exposto na página. 
                A partir daí ele identificará se está na página de login ou de cadastro 
                As opções possíveis são: "Acesse sua conta" e "Crie seua conta" */}
                <Autenticacao page="Acesse sua conta"/>
            </div>
        </>
    )
}