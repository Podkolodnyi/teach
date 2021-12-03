import cs from "./profile.module.css"
import Posts from "./posts/posts";

let Profile = (props) => {
    return (
        <div className={cs.profileWrapp}>
        <img className={cs.avatar} alt={"ava"}/>
            <div className={cs.name}> {props.name} </div>
        <Posts />
        </div>
    );
}

export default Profile;