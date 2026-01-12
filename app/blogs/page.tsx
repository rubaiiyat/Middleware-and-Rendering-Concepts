import React, { Suspense } from "react";
import Blog from "./(blog)/page";

const page = () => {
  return (
    <div className="text-center space-y-5 mt-10">
      <div className="w-6/12 space-y-5 mx-auto">
        <h1 className="text-4xl font-bold text-success">
          Check our popular blogs
        </h1>
        <p className="text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
          distinctio numquam ducimus. Corrupti repudiandae tenetur quae deserunt
          dolores aut ad omnis numquam distinctio excepturi, quisquam, animi
          nisi explicabo nihil laudantium!
        </p>
      </div>
      <div>
        <Suspense fallback={<p className="mx-auto w-full">Loading....</p>}>
          <Blog></Blog>
        </Suspense>
      </div>
    </div>
  );
};

export default page;
