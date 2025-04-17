import { ToastContainer, toast } from "react-toastify";
const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("readList");

  if (storedBookSTR) {
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;
  } else {
    return [];
  }
};

const addToStoreDB = (id) => {
  const storedBookData = getStoredBook();
  if (storedBookData.includes(id)) {
    toast.error("This Book is already in Read List")
  } else {
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList", data);
    toast.success("Book has been added to Read List");
  }
};

export { addToStoreDB, getStoredBook };
