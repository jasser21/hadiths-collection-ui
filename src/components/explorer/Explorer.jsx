import { useState, useEffect } from "react";
// import data from "../../../../data/db.json";
import api from "../../api/data";
import Searchbar from "./Searchbar";
import Loading from "../Loading";
import { useAtom } from "jotai";
import {
  CollectionsAtom,
  colName,
  appState,
  CategorieAtom,
} from "../../lib/atoms";
import Pathcontainer from "./Statevisual/Pathcontainer";
import defaultImage from "/default-book-icon.png";
import Navbar from "../Navbar";

const Explorer = () => {
  const [appst, setAppst] = useAtom(appState);
  const [list, setList] = useAtom(CollectionsAtom);
  const [categoriename, setCategoriename] = useAtom(CategorieAtom);
  const [isLoading, setIsLoading] = useState(true);
  const [collectionName, setCollectionName] = useAtom(colName);

  const fetchData = async (endpoint, j = 0) => {
    try {
      const response = await api.get(endpoint);
      if (response.data) {
        setList(response.data);
        setIsLoading(false);
        if (endpoint != "/collections/") {
          setAppst((previous) => (previous < 2 ? previous + 1 : previous));
        }
      }
    } catch (err) {
      if (err.response) {
        const newJ = j + 1;
        if (newJ < 5) {
          fetchData(endpoint, newJ);
        } else {
          console.log("Max retry count exceeded");
        }
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        const newJ = j + 1;
        if (newJ < 5) {
          fetchData(endpoint, newJ);
        } else {
          console.log("Max retry count exceeded");
        }
        console.log(`Error: ${err.message}`);
      }
    }
  };
  useEffect(() => {
    fetchData("/collections/");
    setCollectionName("");
    setAppst(0);
  }, []);
  useEffect(() => {
    console.log(categoriename);
    fetchData(`/hadiths_categorie/${collectionName}/${categoriename}/`);
  }, [categoriename]);
  useEffect(() => {
    console.log(collectionName);
    console.log(`Categories of ${collectionName} Entered :}`);
    fetchData(`/categories_by_collection/${collectionName}/`);
    console.log(list);
  }, [collectionName]);

  return (
    <div className="mt-5 my-auto mx-auto w-full flex flex-col items-between ">
      <Navbar />
      <Pathcontainer />
      {/* {showListBar && <Listbar title={clicked} />*/}
      <Searchbar /> <span className="w-full h-8"></span>
      <div className="w-full flex flex-wrap justify-center">
        {console.log(list)}
        {isLoading && <Loading />}
        {list.map((item) => (
          <div
            key={item.id}
            className="flex flex-col  items-center justify-start w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-gradient-to-t from-white to-gray-200 border border-gray-300 min-w-20rem h-3rem m-5 rounded-xl p-5"
            onClick={() => {
              setCollectionName(appst == 0 ? item.name : collectionName);
              setCategoriename(appst == 1 ? item.name : categoriename);
            }}
          >
            <div className="w-35vh p-15px flex items-center font-light text-purple-800 leading-5">
              {item.name}
            </div>
            <img src={item.image || defaultImage} alt={item.name} />
            <div>{item.source}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explorer;
