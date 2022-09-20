import React from "react";
import { useEffect, useState } from 'react';
import { Even } from "./Even";
import { Odd } from './Odd';

export function Home(){
    const[message, setMessage] = useState('')
    const [even, setEven] = useState([])
    const [odd, setOdd] = useState([])
    const [showEven, setShowEven] = useState(false)
    const [showOdd, setShowOdd] = useState(false)
    const [removeEven, setRemoveEven] = useState(even)
    const [removeOdd, setRemoveOdd] = useState(odd)
    
    const number = message.substring(0,4)
    const pari = number%2===0
    // const dispari = number%2===1

    function handleMessage(){
        fetch('http://numbersapi.com/random/math')
        .then((response)=>response.text())
        .then((text)=>setMessage(text))
        setMessage(message)
        if(pari) {
            setEven(()=>{
                return [...even, message]
            })} else {
            setOdd(()=>{
                return [...odd, message]
            })}
    }

    useEffect(() => {
        handleMessage()
    },[])

    useEffect(()=>{
        setRemoveEven(odd)
        setRemoveOdd(even)
    })
    
    function handleEvenList(){
        return setShowEven(true)
    }
    function handleOddList(){
        return setShowOdd(true)
    }
    function handleRemoveOdd(index){
        setRemoveOdd(()=>{
            return odd.splice(index, 1)
        })
    }
    function handleRemoveEven(index){
        setRemoveEven(()=>{
            return even.splice(index, 1)
        })
    }

    return (
        <div>
            <p>{message}</p>
            <p>{number}</p>

            <Even even={showEven && even.map((item,index)=><li key={index+item}>{item}<button onClick={()=>handleRemoveEven(index)}>x</button></li>)}/>
            <Odd odd={showOdd && odd.map((item,index)=><li key={index+item}>{item}<button onClick={()=>handleRemoveOdd(index)}>x</button></li>)}/>
            
            <button onClick={()=>handleMessage()}>Ottieni</button>
            <button onClick={()=>handleOddList()}>Odd</button>
            <button onClick={()=>handleEvenList()}>Even</button>
        </div>
    )
}