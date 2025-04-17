import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";
import Book from "../Book/Book";

const ReadList = () => {
  const data = useLoaderData();
  const [readList, setReadLits] = useState([]);
  const [sort, setSort] = useState("");

  const handleSort = (sortType) => {
    setSort(sortType);
    if (sortType == "Pages") {
      const sortByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadLits(sortByPage);
    } else if (sortType == "Ratings") {
      const sortByRating = [...readList].sort((a, b) => a.rating - b.rating);
      setReadLits(sortByRating);
    }
  };

  useEffect(() => {
    const storedBookData = getStoredBook();
    const ConvertedStoredBookData = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      ConvertedStoredBookData.includes(book.bookId)
    );
    setReadLits(myReadList);
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
          {readList.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
