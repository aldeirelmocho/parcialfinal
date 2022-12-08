const Inicio=()=>{

    const imagen= "logo.jpg"
    const imagen2="arbol.jpg"

    return (
        
        <li className="">

        <h1 className="texto">“Haz todo el bien que puedas, por todos los medios que puedas, de todas las maneras que puedas, en todos los lugares que puedas, todas las veces que puedas, a todas las personas que puedas, siempre y cuando puedas” – John Wesley.</h1> 
          
            <div className="imagen2">
            <img alt="img" src={imagen} />
            
            <img alt="ima"src={imagen2}/>
           
            </div>
            
            
        </li>
    )

   

}
export default Inicio