import { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../service/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>

        {posts.length === 0 ? (
          <h1 className="text-2xl font-bold text-center
                         text-gray-700 dark:text-gray-300">
            No Posts Available
          </h1>
        ) : (
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
        )}

      </Container>
    </div>
  );
}

export default AllPosts;
