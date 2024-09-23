import { getPosts } from "@/lib/data";
import Styles from "./adminPosts.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/actions";
import Link from "next/link";

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <div className={Styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div className={Styles.post} key={post.id}>
          <div className={Styles.detail}>
            <Image
              src={post.image || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <Link href={`/blog/${post.slug}`} className={Styles.postTitle}>{post.title}</Link>
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className={Styles.postButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;