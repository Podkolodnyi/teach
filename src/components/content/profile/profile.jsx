import cs from "./profile.module.css"
import Posts from "./posts/posts";

let Profile = (props) => {
    return (
        <div className={cs.profileWrap}>
        <img className={cs.avatar} alt={"ava"}/>
            <div className={cs.name}> {props.name} </div>
        <Posts postsData = {props.profilePage.postsData} newPostText = {props.profilePage.newPostText}
               postText = {props.postText} addPost = {props.addPost}/>
        </div>
    );
};

export default Profile;