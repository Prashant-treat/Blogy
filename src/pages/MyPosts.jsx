import { useState, useEffect } from "react";
import { Container, Loader, PostCard } from "../components";
import appwriteService from "../service/config";
import { useSelector } from "react-redux";
import { Query } from "appwrite";

function MyPosts() {
  const [posts, setPosts] = useState([]);
const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    if (!userData?.$id) return;
    appwriteService.getPosts([Query.equal('userID', userData.$id)]).then((posts) => {
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
            <Loader/>
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

export default MyPosts;