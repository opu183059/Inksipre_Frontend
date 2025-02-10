import { Link } from "react-router-dom";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Must-Have Stationery Items",
      excerpt: "Discover essential stationery items every student needs.",
      image:
        "https://www.deliworld.com/uploads/image/20221017/18/deli-office-stationery-tools.jpg",
      date: "Feb 10, 2025",
    },
    {
      id: 2,
      title: "How to Organize Your Desk",
      excerpt:
        "A clutter-free desk boosts productivity. Learn how to organize.",
      image:
        "https://www.thespruce.com/thmb/CpSGfuAl8rNrleW_URDUik-6oG4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/decoratinghomeoffice2-67f24e719c194c62844edecaf3adf4bb.jpeg",
      date: "Jan 25, 2025",
    },
    {
      id: 3,
      title: "Best Pens for Calligraphy",
      excerpt:
        "Find out the best pens for calligraphy, whether you're a beginner or pro.",
      image:
        "https://i.shgcdn.com/8a699dc2-560c-4ead-bc7b-6f24da4a576e/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      date: "Jan 10, 2025",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <p className="text-center text-2xl font-playwrite font-bold mb-6">
          📖 Our Blog
        </p>

        <p className=" mt-2">
          Tips, guides, and insights on stationery, organization, and
          creativity.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                {post.title}
              </h2>
              <p className="text-gray-600 mt-2">{post.excerpt}</p>
              <p className="text-gray-500 text-sm mt-2">{post.date}</p>
              <Link
                to={`/blogs/${post.id}`}
                state={post}
                className="text-blue-600 font-medium mt-4 inline-block hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
