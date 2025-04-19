import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook, getWishListBook } from "../../utility/addToDB";
import Book from "../Book/Book";
import ReadListBook from "./ReadListBook";

const ReadList = () => {
  const data = useLoaderData();
  const [readList, setReadLits] = useState([]);
  const [wishList, setWishLits] = useState([]);
  const [sort, setSort] = useState("");

  const handleSort = (sortType) => {
    setSort(sortType);
    if (sortType == "Pages") {
      const sortByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadLits(sortByPage);
      const sortByPageW = [...wishList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setWishLits(sortByPageW);
    } else if (sortType == "Ratings") {
      const sortByRating = [...readList].sort((a, b) => a.rating - b.rating);
      setReadLits(sortByRating);
      const sortByRatingW = [...readList].sort((a, b) => a.rating - b.rating);
      setWishLits(sortByRatingW);
    }
  };

  useEffect(() => {
    const storedBookData = getStoredBook();
    const ConvertedStoredBookData = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      ConvertedStoredBookData.includes(book.bookId)
    );
    setReadLits(myReadList);

    const storedWishListData = getWishListBook();
    const ConvertedStoredWishListData = storedWishListData.map((id) =>
      parseInt(id)
    );
    const myWishList = data.filter((book) =>
      ConvertedStoredWishListData.includes(book.bookId)
    );
    setWishLits(myWishList);
  }, []);

  return (
    <div>
      <div className="dropdown dropdown-hover w-fit m-auto flex mb-24 items-center justify-center">
        <div tabIndex={0} role="button" className="btn m-1">
          Sort By {sort ? `: ${sort}` : ""}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu mt-34 bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a onClick={() => handleSort("Pages")}>Pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("Ratings")}>Rating</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div className="flex flex-col gap-5">
            {readList.map((book) => (
              <ReadListBook key={book.bookId} book={book} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col gap-5">
            {wishList.map((book) => (
              <ReadListBook key={book.bookId} book={book} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
