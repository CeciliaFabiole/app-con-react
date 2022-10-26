import { useState } from "react"
import { Odd } from "./Odd"
import { Even } from "./Even"

export function Home(){
    const [message, setMessage] = useState('')
    const [listaPari, setListaPari] = useState([])
    const [listaDispari, setListaDispari] = useState([])
    const [showPari, setshowPari] = useState(false)
    const [showDispari, setshowDispari] = useState(false)

    const number = message.substring(0,4)
    const pari = number%2===0

    function handleFetch() {
        fetch('http://numbersapi.com/random/math')
        .then(response=>response.text())
        .then(text=>setMessage(text))
        setMessage(message)
        if(pari){
            setListaPari([...listaPari, message])
        } else {
            setListaDispari([...listaDispari, message])
        }
    }
    
    return(
        <div>
            <Even listaPari={listaPari} showPari={showPari} setListaPari={setListaPari} setshowPari={setshowPari}/>
            <Odd listaDispari={listaDispari} showDispari={showDispari} setListaDispari={setListaDispari} setshowDispari={setshowDispari}/>
            <button onClick={()=>handleFetch()}>Ottieni</button>
        </div>
    )
}