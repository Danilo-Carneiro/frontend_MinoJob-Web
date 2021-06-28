import api from '../services/api';
import styles from '../styles/components/ItemVaga.module.css';

export interface Vaga {
    id: number,
    empresa: Object
}


export default function ItemVaga(props:any){

    

    return(
        <div className={styles.containerItemVaga}>
            <div className={styles.infoVaga}>
                <div className={styles.top}>
                    <div className={styles.headlineVaga}>
                        { <h2>{props.vaga.nome}</h2> } 
                        <br/>
                        <span>{props.vaga.tx_detalhes} </span>
                    </div>
                    <div className={styles.candidatos}>
                        <span>Candidatos:</span>
                        <strong>10</strong>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <span>
                        <strong>{props.vaga.tx_faixa_salarial != null ? `R$${props.vaga.tx_faixa_salarial}` : `Á combinar`}</strong>
                    </span>
                    <span>
                        <strong>{`${props.vaga.bairro} - ${props.vaga.cidade} / ${props.vaga.uf}`}</strong>
                    </span>
                </div>
            </div>
        </div>
    )
}