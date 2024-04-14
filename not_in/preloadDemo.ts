Route.get("/demo1", async ({ response }) => {
    const userWithPosts = await Fbuser.query().preload('userPost');
    return response.json(userWithPosts);
  });
  
  Route.get("/demo2", async ({ request, response }) => {
    const users = await Fbuser.query().preload("userPost", (postQuery) => {
      postQuery.preload("comments");
    });
    return response.json({ users });
  });
  
  
  
  Route.get("/demo3", async ({ response }) => {
   
    const postsWithUserAndComments = await Fbpost.query()
    .preload('comments', (query) => {
      // Preload comments with their associated user
      query.preload('user');
    });
  
  
  return postsWithUserAndComments;
  });
  
  Route.get("/demo4", async ({ response }) => {
    // const userHasPosts = await Fbuser.query().has('userPost').preload('userPost');
    const userHasPostsAtlest2 = await Fbuser.query().has('userPost', '>=', 2).preload('userPost')
    return userHasPostsAtlest2
  });
  Route.get("/demo5", async ({ response }) => {
   
  });
  
  
  Route.get('/t/:id', async ({ params }) => {
    const userId = params.id
    return userId
  })