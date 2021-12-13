import cs from "./nav.module.css"
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => isActive ? cs.linkActive : cs.link;

let Nav = () => {
    return (
        <nav className={cs.nav}>
            <NavLink to='/profile' className={setActive}> profile </NavLink>
            <NavLink to='/messages' className={setActive}> messages </NavLink>
            <NavLink to='/' className={setActive}>some</NavLink>
            <NavLink to='/' className={setActive}>some</NavLink>
        </nav>
    );
}

export default Nav;