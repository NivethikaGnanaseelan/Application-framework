const uuid=require('uuid');

let posts=new Map();

const createPost=({name,description})=>
{
    let post= {
        id: uuid.v4(),
        name,
        description,
        date: new Date()
    }


   posts.set(post.id,post);
    return post;
}


let getPosts=()=>{
    return [...posts.values()];
}
let getPost=(id)=>{
    return posts.get(id);
}

module.exports={
    createPost,
    getPosts,
    getPost
};



