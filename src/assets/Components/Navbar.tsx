import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import "../Navbar.css";

const Navbar = () => {
return(
    <nav id='navBar'>
    <h2>
      <Link to="/">
        <BiCameraMovie /> to the moona
      </Link>
    </h2>
    <form>
        <input type="text" placeholder="Busque por filmes adultos"/>
        <button type="submit"></button>
        <BiSearchAlt2/>
    </form>
</nav>
    )
}

export default Navbar
