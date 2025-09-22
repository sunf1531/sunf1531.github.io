var posts=["2025/09/21/hello-world/","2025/09/21/这是一篇新的文章a/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };