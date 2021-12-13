import cs from "./post.module.css"

let Post = (props) => {
    return (
        <div className={cs.postWrap}>
            <div className={cs.post}>
                <div className={cs.user}>
                    <img className={cs.avatar} alt={"ava"}/>
                    <div className={cs.name}> {props.name} </div>
                </div>
                <div className={cs.text}> {props.message} </div>
            </div>
            <div className={cs.likesCount}> {props.likes} </div>
        </div>
    );
}

export default Post;