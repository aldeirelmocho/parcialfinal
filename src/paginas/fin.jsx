const Fin=()=>{
    function alerta(){

        alert("se ha realizado su donacion");

    }
    

    
    const imagen= "ropa.png"
    const imagen3= "dinero.png"
    const imagen4= "comida.png"
    return (
        

        <div className="gusto">
            <h1 className="texgus ">¿QUE QUIERES DONAR?</h1>
            
            <img onClick={alerta} alt="k" src={imagen} /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <img onClick={alerta} alt="rr" src={imagen3} /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <img onClick={alerta} alt="j" src={imagen4} /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
           
            
             
            
        </div>


        
    )
}
export default Fin