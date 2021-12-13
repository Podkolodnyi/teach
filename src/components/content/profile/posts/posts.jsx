import cs from "./posts.module.css"
import Post from "./post/post";

let Posts = () => {
    let postsData = [
        {name: "vasya", message: "hi", likes: 9},
        {name: "nina", message: "kelso", likes: 15},
        {name: "kolya", message: "kuku", likes: 7},
        {name: "masha", message: "hello", likes: 6},
    ];

    let postsItem = postsData.map(elem => <Post name = {elem.name} message = {elem.message} likes = {elem.likes}/>);

    return (
        <div className={cs.postsWrap}>
            {postsItem}
            </div>
    );
}

export default Posts;