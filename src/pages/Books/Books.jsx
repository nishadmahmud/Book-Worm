import React, { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  return (
    <div className="mt-20 mb-28">
      <h2 className="font-bold text-4xl text-center mb-8">Books</h2>
      <div className="grid grid-cols-3 gap-5">
        <Suspense fallback={<span>Loading....</span>}>
          {data.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Books;
