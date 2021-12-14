import cs from "./posts.module.css"
import Post from "./post/post";

let Posts = (props) => {
    let postsItem = props.postsData.map(elem => <Post name={elem.name} message={elem.message} likes={elem.likes}/>);

    return (
        <div className ={cs.postsWrap}>
            {postsItem}
            </div>
    );
}

export default Posts;