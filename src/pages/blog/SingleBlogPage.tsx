import { Link, useLocation } from "react-router-dom";

const SingleBlogPage = () => {
  const { state: post } = useLocation();

  if (!post)
    return <p className="text-center text-gray-600 mt-12">Post not found.</p>;
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
      <p className="text-gray-500 text-sm mt-2">Published on {post.date}</p>
      <img
        src={post.image}
        alt={post.title}
        className="w-full mt-6 rounded-lg"
      />
      <p className="text-gray-700 mt-6">{post.excerpt}</p>
      <p className="text-gray-600 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit
        metus vel ipsum fermentum, nec pharetra justo egestas...
      </p>
      <Link
        to="/blogs"
        className="text-blue-600 font-medium mt-6 inline-block hover:underline"
      >
        ← Back to Blog
      </Link>
    </div>
  );
};

export default SingleBlogPage;
