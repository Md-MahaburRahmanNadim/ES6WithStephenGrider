const post = { id: 4, title: "New Post" };

const comments = [
  { postId: 4, content: "awesome post" },
  { postId: 3, content: "it was ok" },
  { postId: 4, content: "neat" },
];

// let find the all comments associtate to a certain post id. The post id = 4

function commentsForPost(post) {
  return comments.filter((comment) => {
    if (comment.postId === post.id) return comment.content; // in this method we can modefi something to do that we have to use map / forEach
  });
}

console.log(commentsForPost(post));
