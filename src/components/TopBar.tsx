import styles from "../styles/components/TopBar.module.css"

export default function TopBar(props:any){
    let namePage = props.page;

    return(
        <div className={styles.topBarContainer}>
            <h1 className={styles.pageName}>{namePage}</h1>
        </div>
    )
}