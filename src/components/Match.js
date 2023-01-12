import { useState } from "react";

import styles from "./css/Match.module.css";

import logo from "../image/logo.svg";
import paper from "../image/icon-paper.svg";
import rock from "../image/icon-rock.svg";
import scissors from "../image/icon-scissors.svg";
import Choice from "./layout/Choice";
import Rules from "./Rules";
import { Link } from "react-router-dom";

function Match() {
    const[showMatch, setShowMatch] = useState(false);
    const[playerChoice, setPlayerChoice] = useState('');
    const[machineChoice, setMachineChoice] = useState('');
    const[result, setResult] = useState('')

    function identifyChoice(e) {
        let option = '';
    
        if (e.target.localName === 'img') {
            return option = e.target.id;
        } else {
            if (e.target.children[0].localName === 'img') {
                return option = e.target.children[0].id;
            }
            return option = e.target.children[0].children[0].id;
        }
    }

    function stopDisplay() {
        setTimeout(() => {
            setShowMatch(false);
        }, 1500)
    }

    function toggleRules() {
        let x = document.querySelector("#fade")
        let y = document.querySelector("#modal")
        
        if (x.hidden && y.hidden) {
            x.removeAttribute("hidden")
            y.removeAttribute("hidden")
            return
        }
        x.setAttribute("hidden", "hidden");
        y.setAttribute("hidden" , "hidden")
    }

    
    function teste(e) {   
        // e.preventDefault()
        const h2Score = document.querySelector('h2#score')
        const score = Number(h2Score.innerHTML)
    
        // identificar qual foi a opção escolhida
        const player = identifyChoice(e);
        // const player = 'paper'
        setPlayerChoice(player)
    
        // sorte com 3 números para a maquina ter a sua opção
        let array = ['paper', 'scissors', 'rock'];
        let x = Math.floor(Math.random() * (3 - 0) + 0);
        const machine = array[x];
        // const machine = 'paper'
        setMachineChoice(machine);

        //comparar a opção do jogador com a da maquina
        // se o jogador vencer mudar o placar
        if (player === machine) {
            console.log('Empate');
            setShowMatch(true);
            setResult('empate')
            stopDisplay()
        } else if (player === 'paper' && machine === 'scissors') {
            console.log('Tesoura corta papel, vitória da maquina');
            setShowMatch(true);
            setResult('maquina')
            stopDisplay()
        } else if (player === 'paper' && machine === 'rock') {
            console.log('Papel embrulha pedra, vitória do jogador');
            h2Score.innerHTML = '';
            h2Score.innerHTML = `${score + 1}`;
            setShowMatch(true);
            setResult('jogador')
            stopDisplay()
        } else if (player === 'scissors' && machine === 'paper') {
            console.log('Tesoura corta papel, vitória do jogador');
            h2Score.innerHTML = '';
            h2Score.innerHTML = `${score + 1}`;
            setShowMatch(true);
            setResult('jogador')
            stopDisplay()
        } else if (player === 'scissors' && machine === 'rock') {
            console.log('Pedra quebra tesoura, vitória da maquina');
            setShowMatch(true);
            setResult('maquina')
            stopDisplay()
        } else if (player === 'rock' && machine === 'scissors') {
            console.log('Pedra quebra tesoura, vitória do jogador');
            h2Score.innerHTML = ''
            h2Score.innerHTML = `${score + 1}`;
            setShowMatch(true);
            setResult('jogador')
            stopDisplay()
        } else if (player === 'rock' && machine === 'paper') {
            console.log('Papel embrulha pedra, vitória da maquina');
            setShowMatch(true);
            setResult('maquina')
            stopDisplay()
        } 
    }




    return(
        <div className={styles.menu}>
            <div className={styles.score_contener}>
                <img src={logo} alt="logo"></img>      
                <div className={styles.score}>
                    <h3>score</h3>
                    <h2 id='score'>0</h2>
                </div>     
            </div>
            {!showMatch ? (
                <div className={styles.selection}>
                    <div className={styles.options}>
                        <div className={`${styles.option} ${styles.border_paper}`} onClick={teste}>
                            <div className={styles.bg}>
                                <img src={paper} alt="paper" id='paper'></img>
                            </div>
                        </div>
                        <div className={`${styles.option} ${styles.border_scissors}`} onClick={teste}>
                            <div className={styles.bg}>
                                <img src={scissors} alt="scissors" id='scissors' ></img>
                            </div>
                        </div>
                        <div className={`${styles.option} ${styles.border_rock}`} onClick={teste}>
                            <div className={styles.bg}>
                                <img src={rock} alt="rock" id='rock'></img>
                            </div>
                        </div> 
                    </div>
                </div>
            ):(
                <Choice Choices={playerChoice} Choice={machineChoice} Result={result}></Choice>
            )}
            <div className={styles.footer}>
                <div className={styles.container_rules}>
                    <Link to="/">
                        <button className={styles.rules}>Exit</button>
                    </Link>
                    <button className={styles.rules} onClick={toggleRules}>Rules</button>
                </div>
            </div>
            <Rules handle={toggleRules}></Rules>
        </div>
    )
}

export default Match