import { Link } from "react-router-dom";

const Home = () => {
  const list_className =
    "font-roboto text-19 font-semibold leading-21 tracking-normal list-none bg-gradient-to-b from-white to-gray-200 border border-gray-200 rounded-md w-5/6 m-3 px-3 py-3 text-center text-purple-900";

  return (
    <div className="mt-24 ml-5 p-0 flex h-30vh w-30vh justify-around items-center flex-col bg-gray border-2 border-gray-300 rounded-lg shadow-xl">
      <div className="m-5 list-none text-normal font-light text-20 leading-23 text-center text-purple-800">
        {" "}
        <span className="font-bold"> Welcome Back !</span>{" "}
      </div>
      <div className={list_className}>
        <Link
          style={{ textDecoration: "None", color: "#36004B" }}
          to="/Library"
        >
          Go To My Library &#62;{" "}
        </Link>
      </div>
      <div className={list_className}>
        <Link
          style={{ textDecoration: "None", color: "#36004B" }}
          to="/Explorer"
        >
          Explore New Hadiths &#62;
        </Link>
      </div>
      <div className={list_className}>
        <a className="no-underline text-purple-900" href="/">
          Manage Account Settings &#62;
        </a>
      </div>
    </div>
  );
};

export default Home;

// import React from "react";
// const UlStyles = {
//   marginTop: "40px",
//   padding: "0 0 ",
//   display: "flex",
//   height: "30vh",
//   width: "30vh",
//   justifyContent: "space-around",
//   alignItems: "center",
//   flexDirection: "column",
//   backgroundColor: "#FFFFFF",
//   border: "1px solid #E2E2E2", // Corrected property name
//   boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)", // Corrected property name
//   borderRadius: "8px",
// };
// const linkStyles = {
//   fontFamily: "Roboto",
//   fontSize: "19npx",
//   fontWeight: "550",
//   lineHeight: "21px",
//   letterSpacing: "0px",

//   listStyle: "None",
//   background: "linear-gradient(180deg, #FDFDFD 0%, #F5F5F5 98.24%)",
//   border: "1px solid #f5f5f5",
//   borderRadius: "6px",
//   width: "80%",
//   padding: "10px 10px",

//   textAlign: "center",

//   color: "#36004B",
// };
// const Ul = () => {
//   return (
//     <ul style={UlStyles}>
//       <li
//         style={{
//           listStyle: "None",
//           fontStyle: "normal",
//           fontWeight: "300",
//           fontSize: "20px",
//           lineHeight: "23px",
//           textAlign: "center",

//           color: "#510064",
//         }}
//       >
//         {" "}
//         <span>let's get started :</span>{" "}
//       </li>
//       <li style={linkStyles}>
//         <a
//           style={{ textDecoration: "None", color: "#36004B" }}
//           href="./Client"
//         >
//           I know my Client &#62;{" "}
//         </a>
//       </li>
//       <li style={linkStyles}>
//         <a style={{ textDecoration: "None", color: "#36004B" }} href="/">
//           find similar classification &#62;
//         </a>
//       </li>
//       <li style={linkStyles}>
//         <a style={{ textDecoration: "None", color: "#36004B" }} href="/">
//           can't find my client &#62;
//         </a>
//       </li>
//     </ul>
//   );
// };

// export default Ul;
