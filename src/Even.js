//Even = Pari
export function Even({listaPari, showPari, setListaPari, setshowPari}){
    function handleRemovePari(index) {
        let newPari = [...listaPari]
        newPari.splice(index,1)
        setListaPari(()=>[...newPari])
    }
    function handlePari(){
        setshowPari(true)
    }
    return(
        <div>
            <h3>Pari</h3>
            <ul>
                {showPari && listaPari.map((item, index)=><li key={index+item}>{item}<button onClick={()=>handleRemovePari(index)}>x</button></li>)}
            </ul>
            <button onClick={handlePari}>Pari</button>
        </div>
    )
}
