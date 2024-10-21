import { useState } from 'react';
import { FaFacebook } from "react-icons/fa";


function Squre({ value, clickedSqure }) {
    return (
        <button onClick={clickedSqure} className={`border ${value === "X" ? "text-violet-600" : "text-blue-400"} border-gray-400 bg-white text-7xl font-bold h-20 w-20 ml-1 leading-9`}>
            {value}
        </button>
    );
}

export default function Board() {
    const [squre, setSqure] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(squre);
    const isDraw = !winner && squre.every((square) => square !== null); // Check if all squares are filled and there's no winner
    let status;

    if (winner) {
        status = `Winner is ${winner}`;
    } else if (isDraw) {
        status = "Draw!";
    } else {
        status = xIsNext ? "X's turn" : "O's turn";
    }

    function handleButton(i) {
        if (squre[i] || winner) {
            return;
        }
        const nextSquire = squre.slice();

        if (xIsNext) {
            nextSquire[i] = "X";
            setXIsNext(false);
        } else {
            nextSquire[i] = "O";
            setXIsNext(true);
        }
        setSqure(nextSquire);
    }

    return (
        <>
            <div className={`flex h-full flex-col items-center ${winner === "X" ? "bg-violet-200" : winner === "O" ? "bg-blue-200" : isDraw? "bg-red-200": ""}`}>
                <div className='mt-10 mb-5'>
                    <h1 className={`text-4xl font-bold ${
                        winner === "X" 
                        ? 
                        "text-violet-500" 
                        :
                         winner === "O" 
                         ? 
                         "text-blue-400" 
                         :
                         isDraw
                         ?
                         "text-red-500"
                         :
                          ""
                          }`}>{status}</h1>
                </div>
                <div className="mb-2 mt-1 flex">
                    <Squre value={squre[0]} clickedSqure={() => handleButton(0)} />
                    <Squre value={squre[1]} clickedSqure={() => handleButton(1)} />
                    <Squre value={squre[2]} clickedSqure={() => handleButton(2)} />
                </div>
                <div className="mb-2 flex">
                    <Squre value={squre[3]} clickedSqure={() => handleButton(3)} />
                    <Squre value={squre[4]} clickedSqure={() => handleButton(4)} />
                    <Squre value={squre[5]} clickedSqure={() => handleButton(5)} />
                </div>
                <div className='flex mb-10'>
                    <Squre value={squre[6]} clickedSqure={() => handleButton(6)} />
                    <Squre value={squre[7]} clickedSqure={() => handleButton(7)} />
                    <Squre value={squre[8]} clickedSqure={() => handleButton(8)} />
                </div>
            </div>
            <p className="text-center mt-5">
                <a
                    href="https://web.facebook.com/wasim.hossain005/"
                    className="text-blue-600 hover:text-blue-800 font-bold flex justify-center items-center text-xl underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaFacebook className='mr-1'/> Wasim Hossain
                </a>
            </p>

        </>
    );
}

function calculateWinner(squre) {
    let lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squre[a] && squre[a] === squre[b] && squre[a] === squre[c]) {
            return squre[a];
        }
    }
    return null;
}
