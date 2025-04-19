import React from "react";
import { Typography, Button, ButtonGroup } from "@material-tailwind/react";
import { BiFlag } from "react-icons/bi";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="h-screen mx-auto grid place-items-center text-center px-8">
      <div>
        <BiFlag className="w-20 h-20 mx-auto"></BiFlag>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mt-10 !text-3xl !leading-snug md:!text-4xl"
        >
          Error 404 <br /> Page not found.
        </Typography>
        <Typography className="mt-8 mb-14 text-base font-normal text-gray-500 mx-auto md:max-w-sm">
          Please try refreshing the page or come back later.
        </Typography>
        <Link to='/' className="font-bold py-2 px-4 rounded-md border border-black hover:bg-black hover:text-white">Back To Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
