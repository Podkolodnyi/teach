

let state = {
    messagesPage: {
        dialogsData: [
            {id: 1, name: "vasya"},
            {id: 2, name: "liza"},
            {id: 3, name: "vlad"},
        ],
        messagesData: [
            {id: 1, message: "hello"},
            {id: 2, message: "hi"},
            {id: 3, message: "hello"},
        ]
    },

    profilePage: {
        postsData: [
            {id: 1, name: "vasya", message: "hi", likes: 9},
            {id: 2, name: "nina", message: "kelso", likes: 15},
            {id: 3, name: "kolya", message: "kuku", likes: 7},
            {id: 4, name: "masha", message: "hello", likes: 6},
        ],
        newPostText: ""
    }
};

let rerenderAll = () => {};

export const addPost = (postText) => {
    let newPostItem = {
        id: state.profilePage.postsData.length + 1,
        name: "nunu",
        message: postText,
        likes: 0,
    }

    state.profilePage.postsData.push(newPostItem);
    state.profilePage.newPostText = "";
    rerenderAll(state);
};

export const postText = (text) => {
    state.profilePage.newPostText = text
    rerenderAll(state);
};

export const subscribe = (observer) => {
rerenderAll = observer
};

export default state;