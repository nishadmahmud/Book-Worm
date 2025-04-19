import React from "react";
import { useLoaderData } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { getStoredBook, getWishListBook } from "../../utility/addToDB";
const colors = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#96CEB4",
  "#FFEEAD",
  "#FF9999",
];

const PageToRead = () => {
  const data = useLoaderData();
  const storedBookData = getStoredBook();
  const ConvertedStoredBookData = storedBookData.map((id) => parseInt(id));
  const myReadList = data.filter((book) =>
    ConvertedStoredBookData.includes(book.bookId)
  );
  const storeWishList = getWishListBook();
  const ConvertedWtoreWishList = storeWishList.map((id) => parseInt(id));
  const myWishList = data.filter((book) =>
    ConvertedWtoreWishList.includes(book.bookId)
  );

  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
     Z`;

  const TriangleBar = (props) => {
    const { x, y, width, height, index } = props;
    const color = colors[index % colors.length];

    return <path d={getPath(x, y, width, height)} stroke="none" fill={color} />;
  };

  const renderCustomBarLabel = ({ x, y, width, value }) => {
    return (
      <text
        x={x + width / 2}
        y={y + 10}
        fill="#666"
        textAnchor="middle"
        dy={-6}
      >{`${value}`}</text>
    );
  };

  return (
    <div className="md:-ml-0 md:px-28 py-10 bg-[#13131308] mb-20 space-y-20 rounded-xl text-base">
      <ResponsiveContainer width="100%" height={500}>
        <h3 className="text-center text-2xl font-bold mb-6 text-[#333]">
          Read List
        </h3>
        <BarChart
          data={myReadList}
          margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
        >
          <XAxis
            dataKey="bookName"
            interval={0}
            tick={{ angle: -45, textAnchor: "end", fontSize: 12 }}
            height={140}
          />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar
            dataKey="totalPages"
            fill={({ index }) => colors[index % colors.length]}
            barSize={110}
            label={renderCustomBarLabel}
            shape={<TriangleBar />}
          />
        </BarChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height={500}>
        <h3 className="text-center text-2xl font-bold mb-6 text-[#333]">
          Wishlist
        </h3>
        <BarChart
          data={myWishList}
          margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
        >
          <XAxis
            dataKey="bookName"
            interval={0}
            tick={{ angle: -45, textAnchor: "end", fontSize: 12 }}
            height={140}
          />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar
            dataKey="totalPages"
            fill={({ index }) => colors[index % colors.length]}
            barSize={110}
            label={renderCustomBarLabel}
            shape={<TriangleBar />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PageToRead;
