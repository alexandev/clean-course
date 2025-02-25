import { PostService } from './05-dependency-b';
import { LocalDataBaseService, JsonDataBaseService, WebApiPostsService } from './05-dependency-c';


// Main
(async () => {

    // const provider = new LocalDataBaseService();
    // const provider = new JsonDataBaseService();
    const provider = new WebApiPostsService();

    const postService = new PostService( provider );

    const posts = await postService.getPosts();

    console.log({ posts })


})();