import { useState } from 'react';


function Squre({value, clickedSqure}){
    

   
    return (
    <button onClick={clickedSqure} className="border border-gray-400 bg-white text-3xl font-bold h-10 w-10 ml-1 leading-9">{value}</button>
    )
}



export default function Board(){
    const [squre, setSqure]= useState(Array(9).fill(null))
    const [xIsNext, setXIsNext]= useState(true)
    const winner = calculateWinner(squre)
    let status;

    if(winner){
        status = `Winner is ${winner}`
    }else{
        status = xIsNext? "X's turn": "O's turn"
    }

    function handleButton(i){
        if(squre[i] || calculateWinner(squre)){
            return
        }
        const nextSquire = squre.slice()

        if(xIsNext){
            nextSquire[i]= "X"
            setXIsNext(false)
            setSqure(nextSquire)
        }else{
            nextSquire[i]= "O"
            setXIsNext(true)
            setSqure(nextSquire)
        }
    }
    
    return (
        <> 
            <div>
                <h1>{status}</h1>
            </div>
            <div className="flex flex-col items-center">
                <div className="mb-2 mt-1 flex">
                    <Squre value={squre[0]} clickedSqure={()=>handleButton(0)}/>
                    <Squre value={squre[1]} clickedSqure={()=>handleButton(1)}/>
                    <Squre value={squre[2]} clickedSqure={()=>handleButton(2)}/>
                </div>
                <div className="mb-2 flex">
                    <Squre value={squre[3]} clickedSqure={()=>handleButton(3)}/>
                    <Squre value={squre[4]} clickedSqure={()=>handleButton(4)}/>
                    <Squre value={squre[5]} clickedSqure={()=>handleButton(5)}/>
                </div>
                <div className='flex'>
                    <Squre value={squre[6]} clickedSqure={()=>handleButton(6)}/>
                    <Squre value={squre[7]} clickedSqure={()=>handleButton(7)}/>
                    <Squre value={squre[8]} clickedSqure={()=>handleButton(8)}/>
                </div>
            </div>
        </>
    );
}

function calculateWinner(squre){
    let lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i =0; i< lines.length; i++){
        const [a,b,c]= lines[i]
        if(squre[a] && squre[a]=== squre[b] && squre[a]===squre[c]){
            return squre[a]
        }
    }
    return null;
}