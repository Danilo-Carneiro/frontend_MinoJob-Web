import Link from 'next/link'
import React from 'react';
import styles from '../styles/components/Sidebar.module.css'

export default function Sidebar(props:any){
    let paginaSelecionada = props.pagina;

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

                    {
                        paginaSelecionada == "home" ?  (
                            <div>
                                <Link href="/home">
                                    <a>
                                        <div className={styles.itemMenu} id={styles.selecionado}>
                                            <img src="assets/home2.png "className={styles.icon}/>
                                            <div>Dashboard</div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        ) : (
                            <div>
                                <Link href="/home">
                                    
                                        <a>
                                            <React.Fragment>
                                            <div className={styles.itemMenu}>
                                                <img src="assets/home.png "className={styles.icon}/>
                                                <div>Dashboard</div>
                                            </div>
                                            </React.Fragment>
                                        </a>
                                    
                                </Link>
                            </div>
                        )
                    }

                    {
                        paginaSelecionada == "perfil" ?  (
                            <div>
                                <Link href="/perfil">
                                    <a>
                                        <div className={styles.itemMenu} id={styles.selecionado}>
                                            <img src="assets/profile2.png "className={styles.icon}/>
                                            <div>Meu Perfil</div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        ) : (
                            <div>
                                <Link href="/perfil">
                                    <a>
                                        <div className={styles.itemMenu}>
                                            <img src="assets/profile.png "className={styles.icon}/>
                                            <div>Meu Perfil</div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        )
                    }

                    {
                        paginaSelecionada == "vagas" ?  (
                            <div>
                                <Link href="/vagas">
                                    <a>
                                        <div className={styles.itemMenu} id={styles.selecionado}>
                                            <img src="assets/money2.png "className={styles.icon}/>
                                            <div>Vagas</div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        ) : (
                            <div>
                                <Link href="/vagas">
                                    <a>
                                        <div className={styles.itemMenu}>
                                            <img src="assets/money.png "className={styles.icon}/>
                                            <div>Vagas</div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        )
                    }

                    {
                        paginaSelecionada == "novavaga" ?  (
                            <div>
                                <Link href="/novavaga">
                                    <a>
                                        <div className={styles.itemMenu} id={styles.selecionado}>
                                            <img src="assets/adicao2.png "className={styles.icon}/>
                                            <div>Nova Vaga</div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        ) : (
                            <div>
                                <Link href="/novavaga">
                                    <a>
                                        <div className={styles.itemMenu}>
                                            <img src="assets/adicao.png "className={styles.icon}/>
                                            <div>Nova Vaga</div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        )
                    }

                    {
                        paginaSelecionada == "candidatos" ?  (
                            <div>
                                <Link href="/#">
                                    <a>
                                        <div className={styles.itemMenu} id={styles.selecionado}>
                                            <img src="assets/candidates2.png "className={styles.icon}/>
                                            <div>Candidatos</div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        ) : (
                            <div>
                                <Link href="/#">
                                    <a>
                                        <div className={styles.itemMenu}>
                                            <img src="assets/candidates.png "className={styles.icon}/>
                                            <div>Candidatos</div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        )
                    }


                    
                    
                    
                </div>

                <div className={styles.boxLogo}>
                    <img className={styles.logo} src="/assets/minojob_logo_deitada.png" alt=""/>
                </div>

            </div>
        </div>
    )
}