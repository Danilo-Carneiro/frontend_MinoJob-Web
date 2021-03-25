import Link from 'next/link'
import styles from '../styles/components/Sidebar.module.css'

export default function Sidebar(){
    return(
        <div className={styles.sidebarContainer}>

            <div className={styles.contentSidebar}>

            {/* Div onde fica avatar + nome empresa */}
            <div className={styles.userInfo}>
                {/* essa div vai ter uma imagem com o avatar da empresa */}
                <div className={styles.avatar}></div>
                <div className={styles.name}>Nome da empresa</div>
            </div>

            {/* Div que contem o menu  */}
            <div className={styles.menu}>

                {/* item do menu  */}
                <Link href="/home">
                    <a>
                    <div className={styles.itemMenu}>
                        <img src="assets/home.png "className={styles.icon}/>
                        <div>Dashboard</div>
                    </div>
                    </a>
                </Link>

                {/* item do menu  */}
                <Link href="/perfil">
                    <a>
                    <div className={styles.itemMenu}>
                        <img src="assets/profile.png "className={styles.icon}/>
                        <div>Meu perfil</div>
                    </div>
                    </a>
                </Link>

                {/* item do menu  */}
                <Link href="/vagas">
                    <a>
                    <div className={styles.itemMenu}>
                        <img src="assets/money.png" className={styles.icon} />
                        <div>Vagas</div>
                    </div>
                    </a>
                </Link>

                {/* item do menu  */}
                <Link href="/novavaga">
                    <a>
                    <div className={styles.itemMenu}>
                        <img src="assets/adicao.png "className={styles.icon}/>
                        <div>Nova vaga</div>
                    </div>
                    </a>
                </Link>

                {/* item do menu  */}
                <Link href="">
                    <a>
                    <div className={styles.itemMenu}>
                        <img src="assets/profile.png "className={styles.icon}/>
                        <div>Ver candidatos</div>
                    </div>
                    </a>
                </Link>
                
            </div>

            </div>
        </div>
    )
}