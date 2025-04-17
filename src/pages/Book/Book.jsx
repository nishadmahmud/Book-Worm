import React from "react";
import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {
  const { bookName, author, image, rating, category, tags } = book;
  return (
    <div className="p-5 flex flex-col justify-center border border-[#13131326] rounded-md gap-5">
      <div className="bg-[#F3F3F3] rounded-sm py-7 flex items-center justify-center">
        <img src={image} className="h-36 w-auto rounded-sm" />
      </div>
      <div className="space-y-3.5">
        <div className="text-sm font-medium text-[#23BE0A] space-x-2.5">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="py-1.5 px-3.5 rounded-2xl bg-[#23BE0A0D]"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold overflow-hidden whitespace-nowrap text-ellipsis">
          {bookName}
        </h3>
        <p className="text-[#131313CC] font-medium text-sm">By : {author}</p>
        <hr className="border-t-1 border-dashed border-[#13131326]" />
        <div className="text-[#131313CC] font-medium text-sm flex justify-between">
            <p>{category}</p>
            <p className="flex items-center justify-center gap-1.5">{rating} <FaRegStar></FaRegStar></p>
        </div>
      </div>
    </div>
  );
};

export default Book;
