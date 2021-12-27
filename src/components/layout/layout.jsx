import Header from "./header/header";
import Nav from "./sitebar/nav/nav";
import {Outlet} from "react-router-dom";
import cs from "./layout.module.css"

let Layout = (props) => {
    return (
        <div className={cs.layout}>
            <Header />
            <Nav />
            <Outlet />
        </div>
    );
}

export default Layout;