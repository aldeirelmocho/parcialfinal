import {Link} from "react-router-dom"
const Header =()=>{
    return(
        <div className="header">
            🍀<Link to="inicio" className="x"> INICIO </Link> &nbsp; &nbsp; &nbsp;
            🌿<Link to="fin" className="x"> DONAR </Link> &nbsp; &nbsp; &nbsp;
            🌊<Link to="acerca" className="x"> REDES SOCIALES </Link> &nbsp; &nbsp; &nbsp;
            ❄<Link to="camara" className="x"> </Link> &nbsp; &nbsp; &nbsp;
        </div>


    )
}
export default Header