import Link from "next/link";

type Blogs = {
  id: number;
  title: string;
  body: string;
};

const getBlog = async (): Promise<Blogs[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  return res.json();
};
const Blog = async () => {
  const blogs = await getBlog();
  return (
    <div className="grid grid-cols-3 gap-10 max-w-7xl mx-auto ">
      {blogs.slice(0, 10).map((blog) => (
        <div
          key={blog.id}
          className="card bg-base-200 text-primary-content w-96"
        >
          <div className="card-body text-start">
            <h2 className="card-title">{blog.title}</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <Link href={`/blogs/${blog.id}`}>
                <button className="btn bg-base-300">Read More</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
