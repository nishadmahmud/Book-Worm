import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import ReadList from "../pages/ReadList/ReadList";
import BookDetails from "../pages/BookDetails/BookDetails";
import PageToRead from "../pages/PageToRead/PageToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("/booksData.json"),
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path:'/readlist',
        loader: () => fetch("/booksData.json"),
        Component: ReadList,
      },
      {
        path:'/pageToRead',
        loader: () => fetch("/booksData.json"),
        Component: PageToRead,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("/booksData.json"),
        Component: BookDetails,
      },
    ],
  },
]);
