type blog = {
  id: number;
  title: string;
  body: string;
};

const getBlog = async (id: string): Promise<blog> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  return res.json();
};
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const post = await getBlog(id);
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="mt-4">{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
