import React, { useState } from 'react';
import { calculateWinner } from '../functions';
import Board from './Board';

const style = {
    width: "200px",
    margin: "30px auto",
}


const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xNext, setXNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);


    const handleClick = (i) => {
        const timeInHistory = history.slice(0, stepNumber + 1);
        const current = timeInHistory[stepNumber]; ///the most current move
        const squares = [...current];
        if (winner || squares[i]) return;

        squares[i] = xNext ? "X" : "O";
        setHistory([...timeInHistory, squares]);
        setStepNumber(timeInHistory.length);
        setXNext(!xNext);

    }

    const jumpTo = (step) => {
        console.log("innnnn");
        setStepNumber(step);
        setXNext(step % 2 === 0);
    }

    const renderMoves = () => {
        history.map((_step, move) => {
            const destination = move ? `go to move ${move}` : `go to start`;
            console.log(destination);
            return <button onClick={()=> jumpTo(move)}>{destination}</button> 
        })
    }


    return (
        <>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div style={style}>
                <p>{winner ? `winner: ${winner}` : `next player: ` + (xNext ? "X" : "O")}</p>
            </div>
            {renderMoves()}
        </>
    )
}

export default Game;