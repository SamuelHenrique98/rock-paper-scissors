import styles from "./css/Choice.module.css";
import paper from "../../image/icon-paper.svg";
import rock from "../../image/icon-rock.svg";
import scissors from "../../image/icon-scissors.svg";

function Choice(Choices, Choice, Result) {

    const objChoice = Object.values(Choices)

    let player = objChoice[0]
    let machine = objChoice[1]
    let result = objChoice[2]

    console.log(result);


    return (
        <div className={`${styles.selection}`}>
            {result === 'empate' && player === 'paper' && (
                <div className={`${styles.choices}`}>
                    <div className={`${styles.choice}`}>
                        <p>You picked</p>
                        <div className={`${styles.option} ${styles.border_lose} ${styles.border_paper}`}>
                            <div className={`${styles.bg} ${styles.bg_lose}`}>
                                <img src={paper} alt="paper"></img>
                            </div>
                        </div>
                    </div>
                    <div className={styles.choice}>
                        <h2>Draw</h2>
                    </div>
                    <div className={`${styles.choice}`}>
                        <p>The house picked</p>
                        <div className={`${styles.option} ${styles.border_lose} ${styles.border_paper}`}>
                            <div className={`${styles.bg} ${styles.bg_lose}`}>
                                <img src={paper} alt="paper"></img>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {result === 'empate' && player === 'scissors' && (
                <div className={`${styles.choices}`}>
                    <div className={`${styles.choice}`}>
                        <p>You picked</p>
                        <div className={`${styles.option} ${styles.border_lose} ${styles.border_scissors}`}>
                            <div className={`${styles.bg} ${styles.bg_lose}`}>
                                <img src={scissors} alt="scissors"></img>
                            </div>
                        </div>
                    </div>
                    <div className={styles.choice}>
                        <h2>Draw</h2>
                    </div>
                    <div className={`${styles.choice}`}>
                        <p>The house picked</p>
                        <div className={`${styles.option} ${styles.border_lose} ${styles.border_scissors}`}>
                            <div className={`${styles.bg} ${styles.bg_lose}`}>
                                <img src={scissors} alt="scissors"></img>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {result === 'empate' && player === 'rock' && (
                <div className={`${styles.choices}`}>
                    <div className={`${styles.choice}`}>
                        <p>You picked</p>
                        <div className={`${styles.option} ${styles.border_lose} ${styles.border_rock}`}>
                            <div className={`${styles.bg} ${styles.bg_lose}`}>
                                <img src={rock} alt="rock"></img>
                            </div>
                        </div>
                    </div>
                    <div className={styles.choice}>
                        <h2>Draw</h2>
                    </div>
                    <div className={`${styles.choice}`}>
                        <p>The house picked</p>
                        <div className={`${styles.option} ${styles.border_lose} ${styles.border_rock}`}>
                            <div className={`${styles.bg} ${styles.bg_lose}`}>
                                <img src={rock} alt="rock"></img>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {result === 'jogador' && player === 'paper' && machine === 'rock' && (
                <div className={`${styles.choices}`}>
                    <div className={`${styles.choice}`}>
                        <p>You picked</p>
                        <div className={`${styles.option} ${styles.border_win} ${styles.border_paper}`}>
                            <div className={`${styles.bg} ${styles.bg_win}`}>
                                <img src={paper} alt="paper"></img>
                            </div>
                        </div>
                    </div>
                    <div className={styles.choice}>
                        <h2>You win</h2>
                    </div>
                    <div className={`${styles.choice}`}>
                        <p>The house picked</p>
                        <div className={`${styles.option} ${styles.border_lose} ${styles.border_rock}`}>
                            <div className={`${styles.bg} ${styles.bg_lose}`}>
                                <img src={rock} alt="rock"></img>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {result === 'jogador' && player === 'scissors' && machine === 'paper' && (
                <div className={`${styles.choices}`}>
                    <div className={`${styles.choice}`}>
                        <p>You picked</p>
                        <div className={`${styles.option} ${styles.border_win} ${styles.border_scissors}`}>
                            <div className={`${styles.bg} ${styles.bg_win}`}>
                                <img src={scissors} alt="scissors"></img>
                            </div>
                        </div>
                    </div>
                    <div className={styles.choice}>
                        <h2>You win</h2>
                    </div>
                    <div className={`${styles.choice}`}>
                        <p>The house picked</p>
                        <div className={`${styles.option} ${styles.border_lose} ${styles.border_paper}`}>
                            <div className={`${styles.bg} ${styles.bg_lose}`}>
                                <img src={paper} alt="paper"></img>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {result === 'jogador' && player === 'rock' && machine === 'scissors' && (
                <div className={`${styles.choices}`}>
                    <div className={`${styles.choice}`}>
                        <p>You picked</p>
                        <div className={`${styles.option} ${styles.border_win} ${styles.border_rock}`}>
                            <div className={`${styles.bg} ${styles.bg_win}`}>
                                <img src={rock} alt="rock"></img>
                            </div>
                        </div>
                    </div>
                    <div className={styles.choice}>
                        <h2>You win</h2>
                    </div>
                    <div className={`${styles.choice}`}>
                        <p>The house picked</p>
                        <div className={`${styles.option} ${styles.border_lose} ${styles.border_scissors}`}>
                            <div className={`${styles.bg} ${styles.bg_lose}`}>
                                <img src={scissors} alt="scissors"></img>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {result === 'maquina' && player === 'paper' && machine === 'scissors' && (
                <div className={`${styles.choices}`}>
                    <div className={`${styles.choice}`}>
                        <p>You picked</p>
                        <div className={`${styles.option} ${styles.border_lose} ${styles.border_paper}`}>
                            <div className={`${styles.bg} ${styles.bg_lose}`}>
                                <img src={paper} alt="paper"></img>
                            </div>
                        </div>
                    </div>
                    <div className={styles.choice}>
                        <h2>You lose</h2>
                    </div>
                    <div className={`${styles.choice}`}>
                        <p>The house picked</p>
                        <div className={`${styles.option} ${styles.border_win} ${styles.border_scissors}`}>
                            <div className={`${styles.bg} ${styles.bg_win}`}>
                                <img src={scissors} alt="scissors"></img>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {result === 'maquina' && player === 'scissors' && machine === 'rock' && (
                <div className={`${styles.choices}`}>
                    <div className={`${styles.choice}`}>
                        <p>You picked</p>
                        <div className={`${styles.option} ${styles.border_lose} ${styles.border_scissors}`}>
                            <div className={`${styles.bg} ${styles.bg_lose}`}>
                                <img src={scissors} alt="scissors"></img>
                            </div>
                        </div>
                    </div>
                    <div className={styles.choice}>
                        <h2>You lose</h2>
                    </div>
                    <div className={`${styles.choice}`}>
                        <p>The house picked</p>
                        <div className={`${styles.option} ${styles.border_win} ${styles.border_rock}`}>
                            <div className={`${styles.bg} ${styles.bg_win}`}>
                                <img src={rock} alt="rock"></img>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {result === 'maquina' && player === 'rock' && machine === 'paper' && (
                <div className={`${styles.choices}`}>
                    <div className={`${styles.choice}`}>
                        <p>You picked</p>
                        <div className={`${styles.option} ${styles.border_lose} ${styles.border_rock}`}>
                            <div className={`${styles.bg} ${styles.bg_lose}`}>
                                <img src={rock} alt="rock"></img>
                            </div>
                        </div>
                    </div>
                    <div className={styles.choice}>
                        <h2>You lose</h2>
                    </div>
                    <div className={`${styles.choice}`}>
                        <p>The house picked</p>
                        <div className={`${styles.option} ${styles.border_win} ${styles.border_paper}`}>
                            <div className={`${styles.bg} ${styles.bg_win}`}>
                                <img src={paper} alt="paper"></img>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Choice