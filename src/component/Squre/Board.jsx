import { useState } from 'react';


function Squre({value, clickedSqure}){
    

   
    return (
    <button onClick={clickedSqure} className="border border-gray-400 bg-white text-3xl font-bold h-10 w-10 ml-1 leading-9">{value}</button>
    )
}

export default function Board(){
    const [squre, setSqure]= useState(Array(9).fill(null))
    const [xIsNext, setXIsNext]= useState(true)

    function handleButton(i){
        if(squre[i]){
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