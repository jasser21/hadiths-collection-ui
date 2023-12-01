import { useAtom } from "jotai";
import { CollectionsAtom } from "../../../lib/atoms";
import { appState } from "../../../lib/atoms";
const Dropdown = () => {
  const [data, useData] = useAtom(CollectionsAtom);
  const [appst, setAppst] = useAtom(appState);
  return (
    <div
      className="w-1/4 h-120 bg-gradient-to-r from-[#510064] to-[#690180] rounded-xl overflow-hidden flex flex-col items-center justify-center"
      style={{ clipPath: "polygon(0% 0%, 80% 0%, 98% 50%, 80% 100%, 0% 100%)" }}
    >
      <p className="mx-10px my-2 font-normal font-200 text-indigo-100 ">
        Collections
      </p>
      <select
        className=" my-1rem mx-5rem h-30 w-3/4 text-black-500 rounder-md shadow-md"
        id="dropdown"
        value={data[0]}
      >
        {data.map((dataItem) => (
          <option key={dataItem.id}>{dataItem.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
