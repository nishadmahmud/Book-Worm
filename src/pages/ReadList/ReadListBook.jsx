import React from "react";
import { IoCalendarNumberOutline, IoPeopleOutline } from "react-icons/io5";
import { LuNotebookText } from "react-icons/lu";
import { Link } from "react-router";

const ReadListBook = ({ book }) => {
  const {
    bookName,
    author,
    image,
    bookId,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="flex flex-col md:flex-row border gap-5 border-[#13131326] rounded-md p-5">
      <div className="py-3 md:py-6 px-0 md:px-11 flex justify-center bg-[#1313130D] rounded-md">
        <img src={image} className="h-36 w-auto rounded-sm" />
      </div>
      <div className="space-y-3.5">
        <h3 className="playfair font-bold text-xl">{bookName}</h3>
        <p className="text-sm font-medium text-[#131313CC]">By : {author}</p>
        <div className="flex flex-col md:flex-row gap-3.5">
          <div className="flex">
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
          <div className="flex gap-2.5 items-center md:justify-center">
            <IoCalendarNumberOutline></IoCalendarNumberOutline>
            <p className="text-sm font-normal text-[#131313CC]">
              Year of Publishing: {yearOfPublishing}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3.5">
          <div className="flex gap-1.5  items-center text-sm font-normal text-[#13131399]">
            <IoPeopleOutline></IoPeopleOutline>
            <p>Publisher: {publisher}</p>
          </div>
          <div className="flex gap-1.5 md:justify-center items-center text-sm font-normal text-[#13131399]">
            <LuNotebookText></LuNotebookText>
            <p>Page: {totalPages}</p>
          </div>
        </div>
        <hr className="border-t-1 border-[#13131326] w-full" />
        <div className="grid grid-cols-2 md:flex md:flex-row gap-2.5">
          <h4 className="text-sm font-normal text-center py-2.5 px-4 rounded-4xl bg-[#328EFF26] text-[#328EFF]">
            Category: {category}
          </h4>
          <h4 className="text-sm font-normal text-center py-2.5 px-4 rounded-4xl bg-[#FFAC3326] text-[#FFAC33]">
            Rating: {rating}
          </h4>
          <Link to={`/bookDetails/${bookId}`} className="col-span-2">
            <h4 className="text-sm text-center font-normal py-2.5 px-4 rounded-4xl bg-[#23BE0A] border border-[#23BE0A] text-white hover:bg-white hover:text-[#23BE0A]">
              View Details
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadListBook;
