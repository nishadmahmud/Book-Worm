import React from "react";
import { useLoaderData } from "react-router";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { getStoredBook } from "../../utility/addToDB";
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
    const { fill, x, y, width, height, index } = props; // Get index from props
    const color = colors[index % colors.length]; // Calculate color based on index

    return <path d={getPath(x, y, width, height)} stroke="none" fill={color} />;
  };

  const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
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
    <div className="m-auto px-28 py-20 bg-[#13131308] rounded-xl">
      <BarChart width={600} height={400} data={myReadList}>
        <XAxis dataKey="bookName" />
        <YAxis />
        <Bar
          dataKey="totalPages"
          fill={({ index }) => colors[index % colors.length]} // Dynamic color
          barSize={110}
          label={renderCustomBarLabel}
          shape={<TriangleBar />}
        />
      </BarChart>
    </div>
  );
};

export default PageToRead;
