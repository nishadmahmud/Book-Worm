import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoreDB } from "../../utility/addToDB";
import { ToastContainer} from "react-toastify";
const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const bookData = data.find((book) => book.bookId == id);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = bookData;

  const handleMarkRead = (id) => {
    addToStoreDB(id);
  };
  return (
    <div className="flex gap-10 mb-8">
      <ToastContainer
        position="top-right"
        autoClose={1300}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="bg-[#1313130D] flex justify-center items-center px-16 rounded-lg">
        <img src={image} className="h-[500px] w-auto rounded-md" />
      </div>
      <div className="space-y-5 flex-1/2">
        <div className="space-y-3.5">
          <h2 className="text-4xl font-bold playfair">{bookName}</h2>
          <p className="text-lg text-[#131313CC]">By : {author}</p>
        </div>
        <div className="space-y-3.5">
          <hr className="border-t-1 border-[#13131326] w-full" />
          <p className="text-lg text-[#131313CC]">{category}</p>
          <hr className="border-t-1 border-[#13131326] w-full" />
        </div>
        <div className="">
          <p className="text-sm text-[#131313B2] font-normal">
            {" "}
            <span className="font-bold text-[#131313]">Review : </span> {review}
          </p>
        </div>
        <div className="flex gap-3.5">
          <p className="font-bold text-sm">Tag</p>
          <div className="text-sm font-medium text-[#23BE0A] space-x-2.5">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="py-1.5 px-3.5 rounded-2xl bg-[#23BE0A0D]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <hr className="border-t-1 border-[#13131326] w-full" />
        <div className="flex gap-12">
          <div className="space-y-2.5 text-sm font-normal text-[#131313B2]">
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>
          <div className="space-y-2.5 text-sm font-semibold text-[#131313]">
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>
        <div className="flex gap-3.5">
          <button
            onClick={() => handleMarkRead(id)}
            className="text-base font-semibold py-3 px-6 rounded-lg border border-[#1313134D] hover:bg-black hover:text-white"
          >
            Read
          </button>
          <button className="text-base text-white font-semibold py-3 px-6 rounded-lg bg-[#50B1C9] border border-[#50B1C9] hover:bg-white hover:text-[#50B1C9]">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
