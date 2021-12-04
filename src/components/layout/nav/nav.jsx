import cs from "./nav.module.css"
import {NavLink} from "react-router-dom";

const setActive =({isActive}) => isActive ? cs.linkActive : cs.link;

let Nav = () => {
    return (
      <nav className={cs.nav}>
          <ul className={cs.navBar}>
              <li className={cs.navElem}><NavLink to='/profile' className={setActive}> profile </NavLink></li>
              <li className={cs.navElem}><NavLink to='/messages' className={setActive}> messages </NavLink></li>
              <li className={cs.navElem}><NavLink to='/' className={setActive}>some</NavLink></li>
              <li className={cs.navElem}><NavLink to='/' className={setActive}>some</NavLink></li>
          </ul>
      </nav>
    );
}

export default Nav;