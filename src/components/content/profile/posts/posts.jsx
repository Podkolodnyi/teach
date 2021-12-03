import cs from "./posts.module.css"
import Post from "./post/post";

let Posts = () => {
    return (
        <div className={cs.postsWrap}>
            <Post message = "hi" likes={5}/>
            <Post message = "hello" likes={10}/>
            </div>
    );
}

export default Posts;