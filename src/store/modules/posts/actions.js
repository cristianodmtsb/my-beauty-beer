export function listPostRequest() {
  return {
    type: "@posts/REQUEST"
  };
}
export function listPostSuccess(posts) {
  return {
    type: "@posts/SUCCESS",
    ...posts
  };
}

export function addPost(post) {
  return {
    type: "@posts/ADD",
    post: {
      id: Math.random() * 100,
      title: post.title,
      content: post.content,
      category: post.category
    }
  };
}

export function deletePost(id) {
  return { type: "@posts/DELETE", id };
}
