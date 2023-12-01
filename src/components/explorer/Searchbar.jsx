import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
const Searchbar = () => {
  const inputRef = useRef();
  const handleSubmit = () => {
    console.log(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    <div className="w-full bg-gray-100 rounded-md flex flex-col justify-center items-stretch m-2rem p-2rem h-16 ">
      <form className="flex justify-center items-center" action="">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-purple-800 self-center relative left-6 "
        />
        <input
          ref={inputRef}
          className="h-8 w-4/5  flex grow justify-start mr-5 border rounded-lg p-4 pl-8 focus:outline-none "
          type="text"
          placeholder="Search for Hadiths"
        />
        <button
          className="bg-gradient-to-b from-purple-500 to-purple-900 rounded-md font-roboto font-normal text-white text-center w-24 h-1 mr-3 hover:bg-purple-400 hover:bg-opacity-50 focus:outline-none "
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
