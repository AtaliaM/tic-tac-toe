import React, { useState } from 'react';
import './GameBoard.css';
import Cell from './components/Cell';

const board = [["0", "1", "2"],
["3", "4", "5"],
["6", "7", "8"]];

const historyHelper = [];

const GameBoard = () => {

    const [currentSign, setCurrentSign] = useState("X");
    const [history, setHistory] = useState([]);

    function markCell(e) {
        if (e.target.className !== "cube X" && e.target.className !== "cube O") {
            e.target.className += ` ${currentSign}`;
            console.log(`id: ${e.target.id}`);
            for (let i = 0; i < board.length; i++) { // marking the clicked cell on board array
                for (let j = 0; j < board[i].length; j++) {
                    if (e.target.id === board[i][j]) {
                        board[i][j] = currentSign;
                        break;
                    }
                }
            }

            if (currentSign === "X") {
                setCurrentSign("O");
            }
            else {
                setCurrentSign("X");
            }

        }

    }

    function getWinner() {
        // check row
        if ((board[0][0] === board[0][1]) && (board[0][0] === board[0][2])) {
            return (
                <div className="winner">{`The winner is ${board[0][0]}`}</div>
            );
        }
        if ((board[1][0] === board[1][1]) && (board[1][0] === board[1][2])) {
            return (
                <div className="winner">{`The winner is ${board[1][0]}`}</div>
            );
        }
        if ((board[2][0] === board[2][1]) && (board[2][0] === board[2][2])) {
            return (
                <div className="winner">{`The winner is ${board[2][0]}`}</div>
            );
        }

        // check column
        if ((board[0][0] === board[1][0]) && (board[0][0] === board[2][0])) {
            return (
                <div className="winner">{`The winner is ${board[0][0]}`}</div>
            );
        }
        if ((board[0][1] === board[1][1]) && (board[0][1] === board[2][1])) {
            return (
                <div className="winner">{`The winner is ${board[0][1]}`}</div>
            );
        }
        if ((board[0][2] === board[1][2]) && (board[0][2] === board[2][2])) {
            return (
                <div className="winner">{`The winner is ${board[0][2]}`}</div>
            );
        }

        // check diagonal
        if ((board[0][0] === board[1][1]) && (board[0][0] === board[2][2])) {
            return (
                <div className="winner">{`The winner is ${board[0][0]}`}</div>
            );
        }
        if ((board[0][2] === board[1][1]) && (board[0][2] === board[2][0])) {
            return (
                <div className="winner">{`The winner is ${board[0][2]}`}</div>
            );
        }

        return null;
    }


    function renderCubes() {
        const state = (
            <>
                <div id="0" className="cube" onClick={markCell}></div>
                <div id="1" className="cube" onClick={markCell}></div>
                <div id="2" className="cube" onClick={markCell}></div>
                <div id="3" className="cube" onClick={markCell}></div>
                <div id="4" className="cube" onClick={markCell} ></div>
                <div id="5" className="cube" onClick={markCell} ></div>
                <div id="6" className="cube" onClick={markCell} ></div>
                <div id="7" className="cube" onClick={markCell}></div>
                <div id="8" className="cube" onClick={markCell}></div>
            </>
        )

        return state;
        
    }

    return (
        <div className="container">
            <div className="game-container">
                <div className="game-board">
                    {renderCubes()}
                </div>
            </div>
            {getWinner()}
        </div>
    )

}

export default GameBoard;