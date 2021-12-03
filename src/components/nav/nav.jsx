import cs from "./nav.module.css"

let Nav = () => {
    return (
      <nav className={cs.nav}>
          <ul className={cs.navBar}>
              <li><a className={cs.navElem} href={123}>some</a></li>
              <li><a className={cs.navElem} href={123}>some</a></li>
              <li><a className={cs.navElem} href={123}>some</a></li>
              <li><a className={cs.navElem} href={123}>some</a></li>
          </ul>
      </nav>
    );
}

export default Nav;