import {Link} from "react-router-dom"
import styles from './css/Menu.module.css'

function Menu(params) {
    return (
        <div className={styles.menu}>
            <div className={styles.header}>
                <h1>Welcome to </h1>
                <h1>
                    <span className={styles.rock}> rock</span>, 
                    <span className={styles.paper}> paper</span>, 
                    <span className={styles.scissors}> scissors</span>
                </h1>
            </div>
            <Link to="/match">
                <button className={styles.button}>    
                    Start
                </button>
            </Link>
        </div>
    )
}

export default Menu