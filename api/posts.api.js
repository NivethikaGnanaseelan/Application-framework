const uuid=require('uuid');

let posts=new Map();

let createPost=(obj)=>{
   let post={
       name:obj.name,
       description:obj.description,
       id:uuid.v4(),
       date:new Date()
   }
   posts.set(post.id,post);
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



