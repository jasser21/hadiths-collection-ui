import { useState, useEffect } from "react";

const Navbar = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems([
      {
        id: 1,
        checked: true,
        item: "Naics",
      },
      {
        id: 2,
        checked: false,
        item: "SIC",
      },
      {
        id: 3,
        checked: false,
        item: "NACE",
      },
    ]);
  }, []);

  return (
    <div className="my-5  flex items-center justify-between bg-gradient-to-b from-white to-gray-100 border border-solid  border-gray-300 rounded-md w-full h-12">
      <div className="ml-18 font-roboto  text-18 text-purple-800 leading-21 w-1/6">
        <a href="/" style={{ textDecoration: "None" }}>
          &gt;<span style={{ width: "11vh" }}> </span> Back
        </a>
      </div>
      <div className="border border-gray-200 h-50"></div>

      <div className="flex grow justify-center items-center m-0 p-0 w-full">
        <p className="font-roboto font-normal text-5 leading-1 text-gray-700 mx-0 px-5">
          Start cascading with:
        </p>
        <ul className="flex justify-between w-1/5">
          {items.length >= 1 &&
            items.map((item) => (
              <li className="list-none mx-auto my-5" key={item.id}>
                <input
                  className="rounded-full border border-solid border-gray-300"
                  type="checkbox"
                  checked={item.checked}
                />
                <label htmlFor="">{item.item}</label>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
