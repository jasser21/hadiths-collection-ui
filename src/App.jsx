import { Route, Routes } from "react-router-dom";
import "./App.css";
import Logo from "/Logo.png";
import { useAtom } from "jotai";
import { appState } from "./lib/atoms";
import Home from "./components/Home";
import Library from "./components/library/Library";
import Explorer from "./components/explorer/Explorer";
function App() {
  const [appst] = useAtom(appState);
  return (
    <>
      {appst}
      <div className="flex justify-center  m-0 ">
        <img className="mt-0" src={Logo} alt="" />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Library" element={<Library />}></Route>
        <Route path="/Explorer" element={<Explorer />}></Route>
        {/* not yet  */}
      </Routes>
    </>
  );
}

export default App;
