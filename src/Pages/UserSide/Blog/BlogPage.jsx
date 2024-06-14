import React ,{useState}from "react";
import BlogCart from "./BlogCart";
import { BannerImage2 } from "../../../../Utils/images";
import Pagination from "../../../Components/Common/Pagination";

const blogsData = [
  {
    id:1,
    date: '25 February',
    category: 'Water',
    image: BannerImage2 ,
    title: 'Children Education Needs For Well The World.',
    description: 'Lorem Ipsum is simply dummy text of the industry\'s since the unknown.',
    author: 'Adam',
  },
  {
    id:2,
    date: '25 February',
    category: 'Education',
    image:  BannerImage2,
    title: 'Old Education Needs For Change The World.',
    description: 'Lorem Ipsum is simply dummy text of the industry\'s since the unknown.',
    author: 'Adam',
  },
  {
    id:3,
    date: '25 February',
    category: 'Poor',
    image:  BannerImage2,
    title: 'Donation is Hope for Poor Childrens',
    description: 'Lorem Ipsum is simply dummy text of the industry\'s since the unknown.',
    author: 'Adam',
  },
  {
    id:4,
    date: '25 February',
    category: 'Water',
    image: BannerImage2 ,
    title: 'Children Education Needs For Well The World.',
    description: 'Lorem Ipsum is simply dummy text of the industry\'s since the unknown.',
    author: 'Adam',
  },
  {
    id:5,
    date: '25 February',
    category: 'Education',
    image:  BannerImage2,
    title: 'Old Education Needs For Change The World.',
    description: 'Lorem Ipsum is simply dummy text of the industry\'s since the unknown.',
    author: 'Adam',
  },
  {
    id:6,
    date: '25 February',
    category: 'Poor',
    image:  BannerImage2,
    title: 'Donation is Hope for Poor Childrens',
    description: 'Lorem Ipsum is simply dummy text of the industry\'s since the unknown.',
    author: 'Adam',
  },
   {
    id:1,
    date: '25 February',
    category: 'Water',
    image: BannerImage2 ,
    title: 'Children Education Needs For Well The World.',
    description: 'Lorem Ipsum is simply dummy text of the industry\'s since the unknown.',
    author: 'Adam',
  },
  {
    id:2,
    date: '25 February',
    category: 'Education',
    image:  BannerImage2,
    title: 'Old Education Needs For Change The World.',
    description: 'Lorem Ipsum is simply dummy text of the industry\'s since the unknown.',
    author: 'Adam',
  },
  {
    id:3,
    date: '25 February',
    category: 'Poor',
    image:  BannerImage2,
    title: 'Donation is Hope for Poor Childrens',
    description: 'Lorem Ipsum is simply dummy text of the industry\'s since the unknown.',
    author: 'Adam',
  },
];

const BlogPage = ({limit}) => {
  const [currentPage,setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const  indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  const totalBlogs =
  location.pathname === "/blogs" ? blogsData.length : limit;
const displayedBlogs =
  location.pathname === "/blogs"
    ? blogsData.slice(indexOfFirstBlog, indexOfLastBlog)
    : blogsData.slice(0, limit);

const totalPages = Math.ceil(totalBlogs / blogsPerPage);

const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
};
  return (
    <div className="mt-20 container mx-auto py-6 ">
      <h2 className="text-3xl font-bold text-center mb-10">
        Latest News From Givest Blog
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedBlogs.map((blog)=>(
          <BlogCart key={blog.id} blog={blog}/>
        ))}
      </div>
      {location.pathname === "/blogs" && totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      )}
    </div>
    
  );
};

export default BlogPage;
