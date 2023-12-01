import Dropdown from "./Dropdown";
import { useAtom } from "jotai";
import { appState } from "../../../lib/atoms";

function Pathcontainer() {
  const [appst, setAppst] = useAtom(appState);
  if (appst == 0) {
    return;
  }
  return (
    <div
      className="flex flex-row w-99 h-24 bg-[#510064] rounded-lg border-r-25 border-white  my-4"
      style={{
        clipPath: "polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)",
      }}
    >
      {Array.from({ length: appst }).map((_, index) => (
        <Dropdown key={index} />
      ))}
    </div>
  );
}

export default Pathcontainer;
