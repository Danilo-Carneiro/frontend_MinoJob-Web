import styles from '../styles/components/ItemVaga.module.css';

export default function ItemVaga(){
    return(
        <div className={styles.containerItemVaga}>
            <div className={styles.infoVaga}>
                <div className={styles.top}>
                    <div className={styles.headlineVaga}>
                        <h2>Nome da vaga</h2>
                        <br/>
                        <span>Parte do texto de descrição da vaga Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam impedit soluta, sunt consequatur, earum voluptatem magni cupiditate eius, </span>
                    </div>
                    <div className={styles.candidatos}>
                        <span>Candidatos:</span>
                        <strong>10</strong>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <span>
                        <strong>R$1500,00</strong>
                    </span>
                    <span>
                        <strong>São Paulo, SP</strong>
                    </span>
                </div>
            </div>
        </div>
    )
}