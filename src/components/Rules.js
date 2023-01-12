import styles from "./css/Rules.module.css"
import imgRules from "../image/image-rules.svg";


function Rules({handle}){
    return (
        <>
            <div id="fade" hidden className={styles.fade}></div>
            <div id="modal" hidden className={styles.modal}>
                <div className={styles.modal_header}>
                    <h2>Rules</h2>
                    <button id={styles.close_modal} onClick={handle}>Fechar</button>
                </div>
                <div className={styles.modal_body}>
                    <img src={imgRules} alt="rules"></img>
                </div>
            </div>
        </>
    )
}

export default Rules