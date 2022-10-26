//Odd = Dispari
export function Odd({listaDispari, showDispari, setListaDispari, setshowDispari}){
    function handleDispari(){
        setshowDispari(true)
    }

    function handleRemoveDispari(index){
        let newDispari=[...listaDispari]
        newDispari.splice(index,1)
        setListaDispari([...newDispari])

    }
    
    return(
        <div>
            <h3>Dispari</h3>
            <ul>
                {showDispari && listaDispari.map((item, index)=><li key={index+item}>{item}<button onClick={()=>handleRemoveDispari(index)}>x</button></li>)}
            </ul>
            <button onClick={handleDispari}>Dispari</button>
        </div>
    )
}