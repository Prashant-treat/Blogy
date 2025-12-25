import { useEffect, useState } from "react";
import appwriteService from "../service/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-16 text-center">
        <Container>
          <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-300">
            No Posts Here
          </h1>
        </Container>
      </div>
    );
  }else{
  
  return (
    <div className="w-full py-8">
      <Container>
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-6
          "
        >
          {posts.map((post) => (
            <PostCard key={post.$id} {...post} />
          ))}
        </div>
      </Container>
    </div>
  );
  }
}

export default Home;
