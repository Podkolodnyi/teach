import cs from "./dname.module.css"
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => isActive ? cs.linkActive : cs.link;

const DialogName = (props) => {
    let path = `/messages/${props.id}`;
    return (
        <NavLink to={path} className={setActive}>{props.name}</NavLink>
    );
}

export default DialogName;