import cs from "./post.module.css"

let Post = (props) => {
    return (
        <div className={cs.postWrap}>
            <img className={cs.avatar} alt={"ava"}/>
            <div className={cs.text}> {props.message} </div>
            <div className={cs.likesCount}> {props.likes} </div>
        </div>
    );
}

export default Post;