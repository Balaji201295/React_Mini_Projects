import React, { useState, useEffect } from "react";
import api from "../api/posts";
import { data } from "autoprefixer";
const DataWithPagination = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const PostsPerPage = 10;

  // fetch Data
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await api.get("/posts");
        setPosts(data);
      } catch (error) {
        console.log("Error:", error.message);
      }
    };
    fetchPosts();
  }, []);

  // pagination
  const indexOfLastPost = currentPage * PostsPerPage; // 1 * 10 = 10
  const indexofFirstPost = indexOfLastPost - PostsPerPage; // 10 - 10 = 0
  const currentPosts = posts.slice(indexofFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / PostsPerPage); // 100/10 = 10

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <h1>Fetch Data With Pagination</h1>
      <div className="bg-blue-600 flex flex-col justify-center items-center gap-6 py-6 sm:py-12 px-4 sm:px-10 rounded-sm">
        {/* data */}
        <ul className="flex flex-col justify-start items-start gap-4">
          {currentPosts.map(({ id, title, body }) => (
            <li
              key={id}
              className="flex justify-start items-start gap-4 border-2 border-white rounded py-2 px-4 text-white"
            >
              <p className="text-lg font-bold underline underline-offset-4">
                {id}.
              </p>
              <div className="flex flex-col gap-2">
                <h3 className="text-base capitalize">{title}</h3>
                <p className="text-sm font-normal">{body}</p>
              </div>
            </li>
          ))}
        </ul>
        {/* pagination */}
        <div className="flex flex-col sm:flex-row gap-4 text-blue-100 hover:text-white">
          <button
            type="button"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={currentPage === 1 ? "cursor-not-allowed" : ""}
          >
            Prev
          </button>
          <div className="flex flex-wrap justify-center items-center gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                type="button"
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={`${
                  currentPage === index + 1 ? "bg-white text-blue-600" : ""
                } border w-8 h-8 text-sm`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={currentPage === totalPages ? "cursor-not-allowed" : ""}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
export default DataWithPagination;
