import cs from "./header.module.css";

let Header = () => {
    return (
        <header className={cs.header}>
            <img className={cs.logo} src="https://pngimg.com/uploads/filmstrip/filmstrip_PNG144.png" alt = "logo"/>
        </header>
    );
}

export default Header;