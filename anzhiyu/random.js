var posts=["2025/09/22/这是另一篇新的博文/","2025/09/21/这是一篇新的文章a/","2025/09/21/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };