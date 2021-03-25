import Head from "next/head";
import Link from "next/link";


export default function Index() {
  return (
    <div>
      <Head>
        <title>Bem Vindo | MinoJob</title>
      </Head>

      <div>
        <Link href="/cadastro">
          <a>
            Home
          </a>
        </Link>
      </div>
      
    </div>
  )
}
