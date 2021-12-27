import React from "react";
import cs from "./posts.module.css"
import Post from "./post/post";

let Posts = (props) => {
    let postsItem = props.postsData.map(elem => <Post name={elem.name} message={elem.message} likes={elem.likes}/>);

    let postText = React.createRef();

    let onChangeText = () => {
        let text = postText.current.value
        props.postText(text)
    }

    let addPost = () => {
        let text = postText.current.value;
        props.addPost(text);
    };

    return (
        <div className ={cs.postsWrap}>
            <div className={cs.postCreate}>
                <input ref={postText} onChange={onChangeText} value={props.newPostText} />
                <button onClick={addPost}>New post</button>
            </div>
            {postsItem}
            </div>
    );
}

export default Posts;